const express = require('express');
const cors = require('cors');
const path = require('path');
const { getDb } = require('./database');
const { seed } = require('./seedData');

const authRoutes = require('./routes/auth');
const courseRoutes = require('./routes/courses');
const enrollmentRoutes = require('./routes/enrollments');
const { router: todoRoutes } = require('./routes/todos');
const progressRoutes = require('./routes/progress');
const streakRoutes = require('./routes/streaks');
const quizRoutes = require('./routes/quizzes');
const interviewRoutes = require('./routes/interviews');
const achievementRoutes = require('./routes/achievements');
const userRoutes = require('./routes/user');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/enrollments', enrollmentRoutes);
app.use('/api/todos', todoRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/streaks', streakRoutes);
app.use('/api/quizzes', quizRoutes);
app.use('/api/interviews', interviewRoutes);
app.use('/api/achievements', achievementRoutes);
app.use('/api/user', userRoutes);

const fs = require('fs');

// Serve static frontend in production if built
const candidateDist1 = path.join(__dirname, '../dist');
const candidateDist2 = path.join(process.cwd(), 'dist');
const distPath = fs.existsSync(candidateDist1) ? candidateDist1 : (fs.existsSync(candidateDist2) ? candidateDist2 : candidateDist1);

if (fs.existsSync(distPath)) {
  console.log(`📁 Serving static frontend build from: ${distPath}`);
  app.use(express.static(distPath));
  app.use((req, res, next) => {
    if (req.path.startsWith('/api')) {
      return res.status(404).json({ error: 'API endpoint not found.' });
    }
    res.sendFile(path.join(distPath, 'index.html'));
  });
} else {
  console.warn(`⚠️ Warning: Static frontend build directory not found at ${distPath}. Ensure build command is "npm install && npm run build".`);
  app.get('/', (req, res) => {
    res.status(200).send('PrepNex API Server is running. Frontend build (dist) was not found. Please ensure Render Build Command is "npm install && npm run build".');
  });
}

// Start Server & Ensure Database Seed
async function startServer() {
  try {
    const db = await getDb();
    // Check if courses are seeded
    const courseCount = await db.get('SELECT COUNT(*) as count FROM courses');
    if (!courseCount || courseCount.count === 0) {
      console.log('Seeding initial PrepNex database content...');
      await seed();
    }

    app.listen(PORT, () => {
      console.log(`🚀 PrepNex Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
  }
}

startServer();
