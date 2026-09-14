const express = require('express');
const { getDb } = require('../database');
const { authMiddleware } = require('../authMiddleware');
const { generateDailyTodosForUser, updateStreakOnActivity } = require('./todos');

const router = express.Router();

// SUBMIT QUIZ
router.post('/submit', authMiddleware, async (req, res) => {
  try {
    const { courseId, topicId, userAnswers } = req.body;
    if (!courseId || !topicId || !userAnswers) {
      return res.status(400).json({ error: 'courseId, topicId, and userAnswers are required.' });
    }

    const db = await getDb();

    // Fetch topic quiz definition
    const topic = await db.get('SELECT * FROM course_topics WHERE id = ?', [topicId]);
    if (!topic || !topic.content_json) {
      return res.status(404).json({ error: 'Quiz not found for this topic.' });
    }

    const content = JSON.parse(topic.content_json);
    const quizQuestions = content.quiz || [];

    if (quizQuestions.length === 0) {
      return res.status(400).json({ error: 'No quiz questions available for this topic.' });
    }

    let correctCount = 0;
    const evaluatedResults = [];

    quizQuestions.forEach((q, idx) => {
      const selectedAnswer = userAnswers[q.id] !== undefined ? userAnswers[q.id] : userAnswers[idx];
      const isCorrect = selectedAnswer === q.correct;
      if (isCorrect) correctCount++;

      evaluatedResults.push({
        questionId: q.id,
        question: q.question,
        options: q.options,
        selected: selectedAnswer,
        correct: q.correct,
        isCorrect,
        explanation: q.explanation || 'Review concept explanation.'
      });
    });

    const scorePercentage = Math.round((correctCount / quizQuestions.length) * 100);
    const passed = scorePercentage >= 60 ? 1 : 0;

    // Save quiz result to DB
    await db.run(`
      INSERT INTO quiz_results (user_id, course_id, topic_id, score_percentage, passed)
      VALUES (?, ?, ?, ?, ?)
    `, [req.user.id, courseId, topicId, scorePercentage, passed]);

    // If passed, mark topic completed in progress
    if (passed) {
      await db.run(`
        INSERT INTO progress (user_id, course_id, topic_id, completion_percentage, completed, last_accessed_at)
        VALUES (?, ?, ?, 100, 1, CURRENT_TIMESTAMP)
        ON CONFLICT(user_id, course_id, topic_id) DO UPDATE SET
          completion_percentage = 100,
          completed = 1,
          last_accessed_at = CURRENT_TIMESTAMP
      `, [req.user.id, courseId, topicId]);

      // Update streak
      await updateStreakOnActivity(req.user.id, courseId);
    } else {
      // If failed (< 60%), generate revision task immediately in todos
      const today = new Date().toISOString().split('T')[0];
      await db.run(`
        INSERT INTO todos (user_id, course_id, topic_id, title, description, estimated_minutes, due_date, task_type)
        VALUES (?, ?, ?, ?, ?, ?, ?, 'revision')
      `, [
        req.user.id,
        courseId,
        topicId,
        `Revise ${topic.title}`,
        `Quiz score was ${scorePercentage}%. Review concepts before re-testing.`,
        10,
        today
      ]);
    }

    res.json({
      score_percentage: scorePercentage,
      correct_count: correctCount,
      total_questions: quizQuestions.length,
      passed,
      evaluations: evaluatedResults,
      recommendation: passed
        ? 'Great job! You mastered this topic. Move to the next topic.'
        : `Score is under 60%. A revision task for "${topic.title}" has been added to your daily plan.`
    });
  } catch (err) {
    console.error('Quiz submission error:', err);
    res.status(500).json({ error: 'Failed to process quiz submission.' });
  }
});

module.exports = router;
