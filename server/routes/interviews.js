const express = require('express');
const { getDb } = require('../database');
const { authMiddleware } = require('../authMiddleware');

const router = express.Router();

// GENERATE TAILORED MOCK INTERVIEW QUESTIONS
router.post('/generate', authMiddleware, async (req, res) => {
  try {
    const { targetRole, languages, dsaSkills, otherSkills, experience } = req.body;

    const roleName = targetRole || 'Software Engineer';
    const langs = languages && languages.length > 0 ? languages.join(', ') : 'Python, Java';
    const dsa = dsaSkills && dsaSkills.length > 0 ? dsaSkills.join(', ') : 'Arrays, Two Pointers, Trees';

    // Round 1: Technical Questions
    const techQuestions = [
      {
        id: 'tech_1',
        round: 'Round 1: Technical Knowledge',
        category: 'Core Concepts',
        question: `Explain how memory management and garbage collection work in ${langs}. How does this impact performance in large-scale applications?`,
        suggestedKeywords: ['garbage collection', 'heap', 'stack', 'memory', 'reference', 'pointers', 'allocation']
      },
      {
        id: 'tech_2',
        round: 'Round 1: Technical Knowledge',
        category: 'Architecture & Design',
        question: `What are the key differences between SQL and NoSQL databases? When would you choose one over the other for a ${roleName} project?`,
        suggestedKeywords: ['relational', 'schema', 'ACID', 'scaling', 'document', 'indexing', 'query']
      }
    ];

    // Round 2: DSA / Coding Questions
    const dsaQuestions = [
      {
        id: 'dsa_1',
        round: 'Round 2: DSA & Coding',
        category: 'Algorithmic Problem Solving',
        question: `Write an efficient algorithm to find the longest substring without repeating characters in a given string. What is the time and space complexity?`,
        initialCode: `function lengthOfLongestSubstring(s) {\n  // Write your algorithm here\n  \n}`,
        suggestedKeywords: ['sliding window', 'hashmap', 'O(N)', 'pointer', 'set', 'time complexity']
      },
      {
        id: 'dsa_2',
        round: 'Round 2: DSA & Coding',
        category: 'Data Structure Design',
        question: `Describe how you would implement a Min-Stack data structure that supports push, pop, top, and retrieving the minimum element in O(1) time.`,
        initialCode: `class MinStack {\n  constructor() {\n    // Initialize stacks\n  }\n}`,
        suggestedKeywords: ['auxiliary stack', 'O(1)', 'push', 'pop', 'min element', 'stack']
      }
    ];

    // Round 3: HR & Behavioral Questions
    const hrQuestions = [
      {
        id: 'hr_1',
        round: 'Round 3: HR & Behavioral',
        category: 'Behavioral & Teamwork',
        question: `Describe a challenging technical problem you faced during a project. How did you diagnose the root cause and resolve it?`,
        suggestedKeywords: ['debug', 'collaboration', 'solution', 'testing', 'learned', 'outcome']
      },
      {
        id: 'hr_2',
        round: 'Round 3: HR & Behavioral',
        category: 'Career Vision',
        question: `Why are you interested in the ${roleName} position, and where do you see your technical trajectory in 3 years?`,
        suggestedKeywords: ['growth', 'passion', 'learning', 'impact', 'leadership', 'skills']
      }
    ];

    res.json({
      interviewConfig: {
        role: roleName,
        languages: langs,
        dsaSkills: dsa,
        experience: experience || 'Entry Level (0-2 yrs)',
        durationMinutes: 25
      },
      questions: [...techQuestions, ...dsaQuestions, ...hrQuestions]
    });
  } catch (err) {
    console.error('Generate interview error:', err);
    res.status(500).json({ error: 'Failed to generate interview questions.' });
  }
});

// SUBMIT & EVALUATE MOCK INTERVIEW
router.post('/evaluate', authMiddleware, async (req, res) => {
  try {
    const { targetRole, answers, questions } = req.body;
    if (!answers) return res.status(400).json({ error: 'Answers are required.' });

    let totalTechScore = 0;
    let totalDsaScore = 0;
    let totalProblemSolvingScore = 0;
    let totalCommScore = 0;
    let totalHrScore = 0;

    let techCount = 0;
    let dsaCount = 0;
    let hrCount = 0;

    questions.forEach((q) => {
      const userAns = (answers[q.id] || '').trim();
      const lengthScore = Math.min(100, Math.round((userAns.length / 120) * 100));

      let keywordHits = 0;
      if (q.suggestedKeywords) {
        q.suggestedKeywords.forEach(kw => {
          if (userAns.toLowerCase().includes(kw.toLowerCase())) {
            keywordHits++;
          }
        });
      }

      const keywordScore = q.suggestedKeywords && q.suggestedKeywords.length > 0
        ? Math.round((keywordHits / q.suggestedKeywords.length) * 100)
        : 75;

      const questionScore = Math.min(100, Math.round(lengthScore * 0.4 + keywordScore * 0.6));

      if (q.round.includes('Technical')) {
        totalTechScore += questionScore;
        totalProblemSolvingScore += Math.round(questionScore * 0.9);
        techCount++;
      } else if (q.round.includes('DSA')) {
        totalDsaScore += questionScore;
        totalProblemSolvingScore += questionScore;
        dsaCount++;
      } else if (q.round.includes('HR')) {
        totalHrScore += questionScore;
        totalCommScore += questionScore;
        hrCount++;
      }
    });

    const finalTech = techCount > 0 ? Math.round(totalTechScore / techCount) : 80;
    const finalDsa = dsaCount > 0 ? Math.round(totalDsaScore / dsaCount) : 75;
    const finalProblemSolving = (techCount + dsaCount) > 0 ? Math.round(totalProblemSolvingScore / (techCount + dsaCount)) : 78;
    const finalComm = hrCount > 0 ? Math.round(totalCommScore / hrCount) : 82;
    const finalHr = hrCount > 0 ? Math.round(totalHrScore / hrCount) : 85;

    const overallScore = Math.round(
      (finalTech * 0.25) + (finalDsa * 0.25) + (finalProblemSolving * 0.25) + (finalComm * 0.15) + (finalHr * 0.10)
    );

    const feedback = {
      strengths: [
        'Strong understanding of algorithmic problem breakdown',
        'Clear structured response format in technical scenarios',
        'Good communication clarity during HR questions'
      ],
      weakAreas: [
        finalDsa < 80 ? 'Deep dive required into edge cases and space complexity in DSA' : 'System design trade-offs',
        finalTech < 80 ? 'Revise core CS fundamentals and language memory management' : 'Architectural patterns'
      ],
      recommendedTopics: [
        'Sliding Window & Two Pointers DSA Patterns',
        'Language-specific memory allocation & Garbage Collection',
        'Behavioral STAR Method for HR responses'
      ],
      recommendedCourses: ['DSA (Pattern-Based)', 'Aptitude & Reasoning Mastery']
    };

    const db = await getDb();
    const result = await db.run(`
      INSERT INTO interview_results (
        user_id, target_role, tech_score, dsa_score, problem_solving_score, communication_score, hr_score, overall_score, feedback_json
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [
      req.user.id,
      targetRole || 'Software Engineer',
      finalTech,
      finalDsa,
      finalProblemSolving,
      finalComm,
      finalHr,
      overallScore,
      JSON.stringify(feedback)
    ]);

    // Unlock mock interview achievement
    await db.run(`
      INSERT OR IGNORE INTO achievements (user_id, badge_code, badge_name, badge_desc)
      VALUES (?, 'MOCK_STAR', '🎯 Interview Ready', 'Completed your first 25-minute Mock Interview.')
    `, [req.user.id]);

    res.json({
      interview_id: result.lastID,
      report: {
        targetRole: targetRole || 'Software Engineer',
        tech_score: finalTech,
        dsa_score: finalDsa,
        problem_solving_score: finalProblemSolving,
        communication_score: finalComm,
        hr_score: finalHr,
        overall_score: overallScore,
        feedback
      }
    });
  } catch (err) {
    console.error('Evaluate interview error:', err);
    res.status(500).json({ error: 'Failed to evaluate interview.' });
  }
});

// GET INTERVIEW HISTORY
router.get('/history', authMiddleware, async (req, res) => {
  try {
    const db = await getDb();
    const history = await db.all(
      'SELECT * FROM interview_results WHERE user_id = ? ORDER BY taken_at DESC',
      [req.user.id]
    );

    const formattedHistory = history.map(h => ({
      ...h,
      feedback: h.feedback_json ? JSON.parse(h.feedback_json) : {}
    }));

    res.json({ history: formattedHistory });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch interview history.' });
  }
});

module.exports = router;
