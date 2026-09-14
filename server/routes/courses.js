const express = require('express');
const { getDb } = require('../database');
const { dsaTopics } = require('../dsaData');

const router = express.Router();

// GET ALL COURSES
router.get('/', async (req, res) => {
  try {
    const db = await getDb();
    const courses = await db.all('SELECT * FROM courses ORDER BY category, title');
    res.json({ courses });
  } catch (err) {
    console.error('Fetch courses error:', err);
    res.status(500).json({ error: 'Failed to fetch courses.' });
  }
});

// GET FULL DSA 16-TOPIC HIERARCHY
router.get('/dsa/hierarchy', async (req, res) => {
  try {
    res.json({ topics: dsaTopics });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch DSA hierarchy.' });
  }
});

// GET COURSE BY ID / SLUG WITH TOPICS
router.get('/:id', async (req, res) => {
  try {
    const db = await getDb();
    const course = await db.get('SELECT * FROM courses WHERE id = ? OR slug = ?', [req.params.id, req.params.id]);

    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    const topics = await db.all(
      'SELECT id, course_id, title, category, order_index, description, estimated_minutes, leetcode_url, difficulty FROM course_topics WHERE course_id = ? ORDER BY order_index ASC',
      [course.id]
    );

    res.json({ course, topics });
  } catch (err) {
    console.error('Fetch course error:', err);
    res.status(500).json({ error: 'Failed to fetch course details.' });
  }
});

// GET SINGLE TOPIC DETAILS WITH FULL JSON CONTENT
router.get('/topic/:topicId', async (req, res) => {
  try {
    const db = await getDb();
    const topic = await db.get('SELECT * FROM course_topics WHERE id = ?', [req.params.topicId]);

    if (!topic) {
      return res.status(404).json({ error: 'Topic not found' });
    }

    if (topic.content_json) {
      try {
        topic.content = JSON.parse(topic.content_json);
      } catch (e) {
        topic.content = {};
      }
    }

    res.json({ topic });
  } catch (err) {
    console.error('Fetch topic error:', err);
    res.status(500).json({ error: 'Failed to fetch topic content.' });
  }
});

module.exports = router;
