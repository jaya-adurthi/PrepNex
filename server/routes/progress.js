const express = require('express');
const { getDb } = require('../database');
const { authMiddleware } = require('../authMiddleware');

const router = express.Router();

// GET OVERALL & COURSE-WISE PROGRESS SUMMARY
router.get('/', authMiddleware, async (req, res) => {
  try {
    const db = await getDb();
    const userId = req.user.id;

    // Get active enrollments with progress
    const enrollments = await db.all(`
      SELECT e.course_id, c.title as course_title, c.category, c.total_topics
      FROM enrollments e
      JOIN courses c ON e.course_id = c.id
      WHERE e.user_id = ? AND e.status = 'active'
    `, [userId]);

    const courseProgressList = [];
    let totalCompletedTopics = 0;
    let totalAllCourseTopics = 0;

    for (let env of enrollments) {
      const completedStats = await db.get(`
        SELECT COUNT(*) as completed_count
        FROM progress
        WHERE user_id = ? AND course_id = ? AND completed = 1
      `, [userId, env.course_id]);

      const completed = completedStats ? completedStats.completed_count : 0;
      const total = env.total_topics || 1;
      const percentage = Math.min(100, Math.round((completed / total) * 100));

      totalCompletedTopics += completed;
      totalAllCourseTopics += total;

      courseProgressList.push({
        course_id: env.course_id,
        course_title: env.course_title,
        category: env.category,
        completed_topics: completed,
        total_topics: total,
        percentage
      });
    }

    const overallPercentage = totalAllCourseTopics > 0
      ? Math.round((totalCompletedTopics / totalAllCourseTopics) * 100)
      : 0;

    // Fetch quiz scores for weak areas calculation
    const quizScores = await db.all(`
      SELECT q.*, ct.title as topic_title, c.title as course_title
      FROM quiz_results q
      JOIN course_topics ct ON q.topic_id = ct.id
      JOIN courses c ON q.course_id = c.id
      WHERE q.user_id = ?
      ORDER BY q.taken_at DESC
    `, [userId]);

    const weakAreas = quizScores.filter(q => q.score_percentage < 60).map(q => ({
      topic_id: q.topic_id,
      topic_title: q.topic_title,
      course_title: q.course_title,
      score: q.score_percentage
    }));

    const strengths = quizScores.filter(q => q.score_percentage >= 80).map(q => ({
      topic_id: q.topic_id,
      topic_title: q.topic_title,
      course_title: q.course_title,
      score: q.score_percentage
    }));

    // Streaks summary
    const streakRecords = await db.all('SELECT current_streak, longest_streak FROM streaks WHERE user_id = ?', [userId]);
    const maxCurrentStreak = streakRecords.reduce((max, s) => Math.max(max, s.current_streak || 0), 0);
    const maxLongestStreak = streakRecords.reduce((max, s) => Math.max(max, s.longest_streak || 0), 0);

    res.json({
      overall_percentage: overallPercentage,
      total_completed_topics: totalCompletedTopics,
      total_enrolled_courses: enrollments.length,
      current_streak: maxCurrentStreak,
      longest_streak: maxLongestStreak,
      courses: courseProgressList,
      weak_areas: weakAreas,
      strengths: strengths
    });
  } catch (err) {
    console.error('Progress summary error:', err);
    res.status(500).json({ error: 'Failed to load progress data.' });
  }
});

// UPDATE TOPIC PROGRESS DIRECTLY
router.post('/topic', authMiddleware, async (req, res) => {
  try {
    const { courseId, topicId, completed } = req.body;
    if (!courseId || !topicId) {
      return res.status(400).json({ error: 'courseId and topicId are required.' });
    }

    const db = await getDb();
    const isCompleted = completed ? 1 : 0;
    const percentage = isCompleted ? 100 : 0;

    await db.run(`
      INSERT INTO progress (user_id, course_id, topic_id, completion_percentage, completed, last_accessed_at)
      VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
      ON CONFLICT(user_id, course_id, topic_id) DO UPDATE SET
        completion_percentage = ?,
        completed = ?,
        last_accessed_at = CURRENT_TIMESTAMP
    `, [req.user.id, courseId, topicId, percentage, isCompleted, percentage, isCompleted]);

    res.json({ message: 'Progress updated', topicId, completed: isCompleted });
  } catch (err) {
    console.error('Update topic progress error:', err);
    res.status(500).json({ error: 'Failed to update progress.' });
  }
});

module.exports = router;
