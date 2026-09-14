const express = require('express');
const { getDb } = require('../database');
const { authMiddleware } = require('../authMiddleware');
const { generateDailyTodosForUser } = require('./todos');

const router = express.Router();

// GET USER ENROLLMENTS
router.get('/', authMiddleware, async (req, res) => {
  try {
    const db = await getDb();
    const enrollments = await db.all(`
      SELECT e.*, c.title as course_title, c.category, c.description, c.icon, c.total_topics,
             IFNULL(s.current_streak, 0) as current_streak,
             IFNULL(s.longest_streak, 0) as longest_streak
      FROM enrollments e
      JOIN courses c ON e.course_id = c.id
      LEFT JOIN streaks s ON e.user_id = s.user_id AND e.course_id = s.course_id
      WHERE e.user_id = ? AND e.status = 'active'
    `, [req.user.id]);

    // Calculate completed topics percentage for each enrollment
    for (let env of enrollments) {
      const stats = await db.get(`
        SELECT COUNT(*) as completed_count
        FROM progress
        WHERE user_id = ? AND course_id = ? AND completed = 1
      `, [req.user.id, env.course_id]);

      const totalTopics = env.total_topics || 1;
      const completedCount = stats ? stats.completed_count : 0;
      env.progress_percentage = Math.min(100, Math.round((completedCount / totalTopics) * 100));
      env.completed_topics_count = completedCount;
    }

    res.json({ enrollments });
  } catch (err) {
    console.error('Fetch enrollments error:', err);
    res.status(500).json({ error: 'Failed to fetch enrollments.' });
  }
});

// ENROLL IN COURSE
router.post('/enroll', authMiddleware, async (req, res) => {
  try {
    const { courseId, dailyGoalMinutes } = req.body;
    if (!courseId) return res.status(400).json({ error: 'Course ID is required.' });

    const db = await getDb();
    const course = await db.get('SELECT * FROM courses WHERE id = ?', [courseId]);
    if (!course) return res.status(404).json({ error: 'Course not found.' });

    // Check duplicate
    const existing = await db.get('SELECT id FROM enrollments WHERE user_id = ? AND course_id = ?', [req.user.id, courseId]);
    if (existing) {
      return res.status(400).json({ error: 'Already enrolled in this course.' });
    }

    const goal = parseInt(dailyGoalMinutes) || 30;
    await db.run(`
      INSERT INTO enrollments (user_id, course_id, daily_goal_minutes, status)
      VALUES (?, ?, ?, 'active')
    `, [req.user.id, courseId, goal]);

    // Create initial streak record (streak stays 0 until activity completed)
    await db.run(`
      INSERT OR IGNORE INTO streaks (user_id, course_id, current_streak, longest_streak)
      VALUES (?, ?, 0, 0)
    `, [req.user.id, courseId]);

    // Unlock achievement for first enrollment
    await db.run(`
      INSERT OR IGNORE INTO achievements (user_id, badge_code, badge_name, badge_desc)
      VALUES (?, 'FIRST_COURSE', '🏆 First Enrollment', 'Enrolled in your first placement preparation course.')
    `, [req.user.id]);

    // Auto-generate daily todos for user
    await generateDailyTodosForUser(req.user.id);

    res.status(201).json({ message: 'Successfully enrolled!', courseId, daily_goal_minutes: goal });
  } catch (err) {
    console.error('Enroll error:', err);
    res.status(500).json({ error: 'Server error during enrollment.' });
  }
});

// UPDATE DAILY GOAL MINUTES
router.put('/:courseId/goal', authMiddleware, async (req, res) => {
  try {
    const { dailyGoalMinutes } = req.body;
    const minutes = parseInt(dailyGoalMinutes);
    if (![10, 20, 30, 60].includes(minutes)) {
      return res.status(400).json({ error: 'Goal minutes must be 10, 20, 30, or 60.' });
    }

    const db = await getDb();
    await db.run(
      'UPDATE enrollments SET daily_goal_minutes = ? WHERE user_id = ? AND course_id = ?',
      [minutes, req.user.id, req.params.courseId]
    );

    // Regenerate daily plan to balance time across courses
    await generateDailyTodosForUser(req.user.id);

    res.json({ message: 'Daily goal updated!', courseId: req.params.courseId, dailyGoalMinutes: minutes });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update goal.' });
  }
});

// UNENROLL FROM COURSE
router.delete('/:courseId', authMiddleware, async (req, res) => {
  try {
    const db = await getDb();
    await db.run('DELETE FROM enrollments WHERE user_id = ? AND course_id = ?', [req.user.id, req.params.courseId]);
    await db.run('DELETE FROM todos WHERE user_id = ? AND course_id = ? AND completed = 0', [req.user.id, req.params.courseId]);

    res.json({ message: 'Successfully unenrolled.' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to unenroll.' });
  }
});

module.exports = router;
