const express = require('express');
const { getDb } = require('../database');
const { authMiddleware } = require('../authMiddleware');
const { defaultAchievements } = require('../seedData');

const router = express.Router();

router.get('/', authMiddleware, async (req, res) => {
  try {
    const db = await getDb();
    const userAchievements = await db.all(
      'SELECT badge_code, unlocked_at FROM achievements WHERE user_id = ?',
      [req.user.id]
    );

    const unlockedCodesMap = new Map(userAchievements.map(a => [a.badge_code, a.unlocked_at]));

    const allBadges = defaultAchievements.map(b => ({
      code: b.code,
      name: b.name,
      description: b.desc,
      unlocked: unlockedCodesMap.has(b.code),
      unlocked_at: unlockedCodesMap.get(b.code) || null
    }));

    res.json({ achievements: allBadges });
  } catch (err) {
    console.error('Achievements fetch error:', err);
    res.status(500).json({ error: 'Failed to fetch achievements.' });
  }
});

module.exports = router;
