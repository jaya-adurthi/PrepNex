const express = require('express');
const { getDb } = require('../database');
const { authMiddleware } = require('../authMiddleware');

const router = express.Router();

// GET USER PROFILE SUMMARY
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const db = await getDb();
    const userId = req.user.id;

    const user = await db.get('SELECT id, name, full_name, email, theme_preference, created_at FROM users WHERE id = ?', [userId]);
    if (user) {
      user.full_name = user.full_name || user.name;
      user.name = user.name || user.full_name;
    }

    const activeEnrollments = await db.all(`
      SELECT e.*, c.title as course_title, c.category
      FROM enrollments e
      JOIN courses c ON e.course_id = c.id
      WHERE e.user_id = ?
    `, [userId]);

    const streakRecords = await db.all('SELECT current_streak, longest_streak FROM streaks WHERE user_id = ?', [userId]);
    const maxCurrentStreak = streakRecords.reduce((max, s) => Math.max(max, s.current_streak || 0), 0);
    const maxLongestStreak = streakRecords.reduce((max, s) => Math.max(max, s.longest_streak || 0), 0);

    const completedTodos = await db.get('SELECT COUNT(*) as count, SUM(estimated_minutes) as total_min FROM todos WHERE user_id = ? AND completed = 1', [userId]);

    res.json({
      user,
      enrolled_courses_count: activeEnrollments.length,
      current_streak: maxCurrentStreak,
      longest_streak: maxLongestStreak,
      completed_tasks_count: completedTodos ? completedTodos.count : 0,
      total_learning_minutes: completedTodos && completedTodos.total_min ? completedTodos.total_min : 0,
      enrollments: activeEnrollments
    });
  } catch (err) {
    console.error('Fetch profile error:', err);
    res.status(500).json({ error: 'Failed to fetch user profile.' });
  }
});

// EDIT PROFILE NAME
router.put('/profile', authMiddleware, async (req, res) => {
  try {
    const { name } = req.body;
    if (!name || name.trim().length === 0) {
      return res.status(400).json({ error: 'Name cannot be empty.' });
    }

    const db = await getDb();
    await db.run('UPDATE users SET name = ?, full_name = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?', [name.trim(), name.trim(), req.user.id]);

    res.json({ message: 'Profile updated successfully!', name: name.trim(), full_name: name.trim() });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update profile.' });
  }
});

module.exports = router;
