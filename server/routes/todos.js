const express = require('express');
const { getDb } = require('../database');
const { authMiddleware } = require('../authMiddleware');

const router = express.Router();

// Helper to format date as YYYY-MM-DD
function getTodayString() {
  const d = new Date();
  return d.toISOString().split('T')[0];
}

// ADAPTIVE DAILY PLAN GENERATOR ENGINE
async function generateDailyTodosForUser(userId) {
  const db = await getDb();
  const today = getTodayString();

  // Get active enrollments
  const enrollments = await db.all(
    'SELECT * FROM enrollments WHERE user_id = ? AND status = "active"',
    [userId]
  );

  if (!enrollments || enrollments.length === 0) return [];

  // Check existing incomplete todos for today
  const existingTodayTodos = await db.all(
    'SELECT id FROM todos WHERE user_id = ? AND due_date = ?',
    [userId, today]
  );

  if (existingTodayTodos.length > 0) {
    // Already generated for today
    return;
  }

  for (let env of enrollments) {
    const courseId = env.course_id;
    const targetMinutes = env.daily_goal_minutes || 30;

    // Check if user had any poor quiz performance (< 60%) in this course
    const weakQuiz = await db.get(`
      SELECT q.topic_id, ct.title as topic_title
      FROM quiz_results q
      JOIN course_topics ct ON q.topic_id = ct.id
      WHERE q.user_id = ? AND q.course_id = ? AND q.score_percentage < 60
      ORDER BY q.taken_at DESC LIMIT 1
    `, [userId, courseId]);

    let allocatedMinutes = 0;

    // If weak area found, insert revision task
    if (weakQuiz) {
      const revisionMin = Math.min(10, targetMinutes);
      await db.run(`
        INSERT INTO todos (user_id, course_id, topic_id, title, description, estimated_minutes, due_date, task_type)
        VALUES (?, ?, ?, ?, ?, ?, ?, 'revision')
      `, [
        userId,
        courseId,
        weakQuiz.topic_id,
        `Revise ${weakQuiz.topic_title}`,
        `Score was under 60% on last quiz. Review concepts & formulas before proceeding.`,
        revisionMin,
        today
      ]);
      allocatedMinutes += revisionMin;
    }

    // Find next incomplete topics for course
    const uncompletedTopics = await db.all(`
      SELECT ct.* FROM course_topics ct
      LEFT JOIN progress p ON ct.id = p.topic_id AND p.user_id = ?
      WHERE ct.course_id = ? AND (p.completed IS NULL OR p.completed = 0)
      ORDER BY ct.order_index ASC
      LIMIT 3
    `, [userId, courseId]);

    for (let topic of uncompletedTopics) {
      if (allocatedMinutes >= targetMinutes) break;

      const taskMin = Math.min(topic.estimated_minutes || 15, targetMinutes - allocatedMinutes);

      // Learn Task
      await db.run(`
        INSERT INTO todos (user_id, course_id, topic_id, title, description, estimated_minutes, due_date, task_type)
        VALUES (?, ?, ?, ?, ?, ?, ?, 'learn')
      `, [
        userId,
        courseId,
        topic.id,
        `Learn ${topic.title}`,
        topic.description || `Study concepts and examples in ${topic.title}`,
        taskMin,
        today
      ]);

      allocatedMinutes += taskMin;

      // Practice / Quiz Task if time permits
      if (allocatedMinutes < targetMinutes) {
        const quizMin = 5;
        await db.run(`
          INSERT INTO todos (user_id, course_id, topic_id, title, description, estimated_minutes, due_date, task_type)
          VALUES (?, ?, ?, ?, ?, ?, ?, 'quiz')
        `, [
          userId,
          courseId,
          topic.id,
          `Topic Quiz: ${topic.title}`,
          `Test your understanding with a quick 5-minute timed quiz.`,
          quizMin,
          today
        ]);
        allocatedMinutes += quizMin;
      }
    }
  }
}

// GET TODAY'S TODOS
router.get('/', authMiddleware, async (req, res) => {
  try {
    const db = await getDb();
    const today = getTodayString();

    // Make sure today's plan is generated
    await generateDailyTodosForUser(req.user.id);

    const todos = await db.all(`
      SELECT t.*, c.title as course_title, c.category as course_category
      FROM todos t
      JOIN courses c ON t.course_id = c.id
      WHERE t.user_id = ? AND t.due_date = ?
      ORDER BY t.completed ASC, t.id ASC
    `, [req.user.id, today]);

    // Calculate daily completion stats
    const totalCount = todos.length;
    const completedCount = todos.filter(t => t.completed === 1).length;
    const totalMinutes = todos.reduce((acc, t) => acc + (t.estimated_minutes || 0), 0);
    const completedMinutes = todos.filter(t => t.completed === 1).reduce((acc, t) => acc + (t.estimated_minutes || 0), 0);

    res.json({
      todos,
      summary: {
        total_tasks: totalCount,
        completed_tasks: completedCount,
        total_minutes: totalMinutes,
        completed_minutes: completedMinutes,
        progress_percentage: totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0
      }
    });
  } catch (err) {
    console.error('Fetch todos error:', err);
    res.status(500).json({ error: 'Failed to fetch daily plan.' });
  }
});

// TOGGLE COMPLETE TODO
router.post('/:id/complete', authMiddleware, async (req, res) => {
  try {
    const db = await getDb();
    const todo = await db.get('SELECT * FROM todos WHERE id = ? AND user_id = ?', [req.params.id, req.user.id]);

    if (!todo) return res.status(404).json({ error: 'Todo item not found.' });

    const newCompleted = todo.completed === 1 ? 0 : 1;
    const completedAt = newCompleted === 1 ? new Date().toISOString() : null;

    await db.run('UPDATE todos SET completed = ?, completed_at = ? WHERE id = ?', [newCompleted, completedAt, todo.id]);

    // If marked as completed and linked to a topic, mark topic progress
    if (newCompleted === 1 && todo.topic_id) {
      await db.run(`
        INSERT INTO progress (user_id, course_id, topic_id, completion_percentage, completed, last_accessed_at)
        VALUES (?, ?, ?, 100, 1, CURRENT_TIMESTAMP)
        ON CONFLICT(user_id, course_id, topic_id) DO UPDATE SET
          completion_percentage = 100,
          completed = 1,
          last_accessed_at = CURRENT_TIMESTAMP
      `, [req.user.id, todo.course_id, todo.topic_id]);
    }

    // Update streak logic for course
    if (newCompleted === 1) {
      await updateStreakOnActivity(req.user.id, todo.course_id);
    }

    // Check achievement triggers
    await checkTodoAchievements(req.user.id);

    res.json({ message: 'Todo updated!', id: todo.id, completed: newCompleted });
  } catch (err) {
    console.error('Complete todo error:', err);
    res.status(500).json({ error: 'Failed to update todo status.' });
  }
});

// REGENERATE DAILY TODOS MANUALLY
router.post('/regenerate', authMiddleware, async (req, res) => {
  try {
    await generateDailyTodosForUser(req.user.id);
    res.json({ message: 'Daily plan updated.' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to regenerate daily plan.' });
  }
});

// Helper for per-course streak updating
async function updateStreakOnActivity(userId, courseId) {
  const db = await getDb();
  const today = getTodayString();

  const streak = await db.get('SELECT * FROM streaks WHERE user_id = ? AND course_id = ?', [userId, courseId]);

  if (!streak) {
    await db.run(`
      INSERT INTO streaks (user_id, course_id, current_streak, longest_streak, last_activity_date)
      VALUES (?, ?, 1, 1, ?)
    `, [userId, courseId, today]);
    return;
  }

  if (streak.last_activity_date === today) {
    // Already updated today
    return;
  }

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().split('T')[0];

  let newCurrent = streak.current_streak;
  if (streak.last_activity_date === yesterdayStr) {
    newCurrent += 1;
  } else {
    newCurrent = 1; // Reset streak if day was missed
  }

  const newLongest = Math.max(streak.longest_streak || 0, newCurrent);

  await db.run(`
    UPDATE streaks
    SET current_streak = ?, longest_streak = ?, last_activity_date = ?
    WHERE user_id = ? AND course_id = ?
  `, [newCurrent, newLongest, today, userId, courseId]);

  // Streak achievements
  if (newCurrent >= 3) {
    await db.run(`
      INSERT OR IGNORE INTO achievements (user_id, badge_code, badge_name, badge_desc)
      VALUES (?, 'STREAK_3', '🔥 3 Day Streak', 'Maintained a learning streak for 3 consecutive days.')
    `, [userId]);
  }
  if (newCurrent >= 7) {
    await db.run(`
      INSERT OR IGNORE INTO achievements (user_id, badge_code, badge_name, badge_desc)
      VALUES (?, 'STREAK_7', '⚡ 7 Day Streak', 'Built a 7-day learning momentum across courses.')
    `, [userId]);
  }
}

async function checkTodoAchievements(userId) {
  const db = await getDb();
  const completedCount = await db.get('SELECT COUNT(*) as count FROM todos WHERE user_id = ? AND completed = 1', [userId]);

  if (completedCount && completedCount.count >= 5) {
    await db.run(`
      INSERT OR IGNORE INTO achievements (user_id, badge_code, badge_name, badge_desc)
      VALUES (?, 'TODO_MASTER', '✅ Task Crusher', 'Completed 5 daily learning plan todos.')
    `, [userId]);
  }
}

module.exports = { router, generateDailyTodosForUser, updateStreakOnActivity };
