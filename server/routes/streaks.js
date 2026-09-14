const express = require('express');
const { getDb } = require('../database');
const { authMiddleware } = require('../authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, async (req, res) => {
  try {
    const db = await getDb();
    const streaks = await db.all(`
      SELECT s.*, c.title as course_title, c.category as course_category
      FROM streaks s
      JOIN courses c ON s.course_id = c.id
      WHERE s.user_id = ?
    `, [req.user.id]);

    const globalCurrentStreak = streaks.reduce((max, s) => Math.max(max, s.current_streak || 0), 0);
    const globalLongestStreak = streaks.reduce((max, s) => Math.max(max, s.longest_streak || 0), 0);

    // Activity dates from completed todos
    const activityDates = await db.all(`
      SELECT DISTINCT DATE(completed_at) as activity_date
      FROM todos
      WHERE user_id = ? AND completed = 1 AND completed_at IS NOT NULL
      ORDER BY activity_date DESC
      LIMIT 30
    `, [req.user.id]);

    res.json({
      streaks,
      global_current_streak: globalCurrentStreak,
      global_longest_streak: globalLongestStreak,
      activity_dates: activityDates.map(a => a.activity_date)
    });
  } catch (err) {
    console.error('Fetch streaks error:', err);
    res.status(500).json({ error: 'Failed to fetch streaks.' });
  }
});

module.exports = router;
