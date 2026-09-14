const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const path = require('path');
const fs = require('fs');

let dbInstance = null;

async function getDb() {
  if (dbInstance) return dbInstance;

  const dbDir = process.env.DATA_DIR || path.join(__dirname, 'data');
  if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
  }
  const dbPath = process.env.DB_PATH || path.join(dbDir, 'prepnex.db');

  dbInstance = await open({
    filename: dbPath,
    driver: sqlite3.Database
  });

  await dbInstance.exec('PRAGMA foreign_keys = ON;');
  await initSchema(dbInstance);

  return dbInstance;
}

async function initSchema(db) {
  // Users table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      full_name TEXT,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      theme_preference TEXT DEFAULT 'dark',
      reset_token TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  try {
    await db.exec('ALTER TABLE users ADD COLUMN full_name TEXT;');
  } catch (e) {
    // Column already exists
  }
  await db.exec('UPDATE users SET full_name = name WHERE full_name IS NULL OR full_name = "";');

  // Courses table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS courses (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      slug TEXT UNIQUE NOT NULL,
      category TEXT NOT NULL,
      description TEXT,
      icon TEXT,
      total_topics INTEGER DEFAULT 0,
      level TEXT DEFAULT 'All Levels'
    );
  `);

  // Course Topics table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS course_topics (
      id TEXT PRIMARY KEY,
      course_id TEXT NOT NULL,
      title TEXT NOT NULL,
      category TEXT NOT NULL,
      order_index INTEGER DEFAULT 0,
      description TEXT,
      content_json TEXT,
      estimated_minutes INTEGER DEFAULT 15,
      leetcode_url TEXT,
      difficulty TEXT DEFAULT 'Medium',
      FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
    );
  `);

  // Enrollments table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS enrollments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      course_id TEXT NOT NULL,
      daily_goal_minutes INTEGER DEFAULT 30,
      enrolled_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      status TEXT DEFAULT 'active',
      UNIQUE(user_id, course_id),
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
      FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
    );
  `);

  // Todos table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS todos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      course_id TEXT NOT NULL,
      topic_id TEXT,
      title TEXT NOT NULL,
      description TEXT,
      estimated_minutes INTEGER DEFAULT 10,
      due_date DATE NOT NULL,
      completed INTEGER DEFAULT 0,
      completed_at DATETIME,
      task_type TEXT DEFAULT 'learn',
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );
  `);

  // Progress table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS progress (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      course_id TEXT NOT NULL,
      topic_id TEXT NOT NULL,
      completion_percentage INTEGER DEFAULT 0,
      completed INTEGER DEFAULT 0,
      last_accessed_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(user_id, course_id, topic_id),
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );
  `);

  // Streaks table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS streaks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      course_id TEXT NOT NULL,
      current_streak INTEGER DEFAULT 0,
      longest_streak INTEGER DEFAULT 0,
      last_activity_date DATE,
      UNIQUE(user_id, course_id),
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );
  `);

  // Quiz Results table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS quiz_results (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      course_id TEXT NOT NULL,
      topic_id TEXT NOT NULL,
      score_percentage REAL NOT NULL,
      passed INTEGER DEFAULT 0,
      taken_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );
  `);

  // Interview Results table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS interview_results (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      target_role TEXT NOT NULL,
      tech_score REAL NOT NULL,
      dsa_score REAL NOT NULL,
      problem_solving_score REAL NOT NULL,
      communication_score REAL NOT NULL,
      hr_score REAL NOT NULL,
      overall_score REAL NOT NULL,
      feedback_json TEXT,
      taken_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );
  `);

  // User Skills table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS user_skills (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      skill_name TEXT NOT NULL,
      proficiency_level TEXT DEFAULT 'Beginner',
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );
  `);

  // Achievements table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS achievements (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      badge_code TEXT NOT NULL,
      badge_name TEXT NOT NULL,
      badge_desc TEXT NOT NULL,
      unlocked_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(user_id, badge_code),
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );
  `);
}

module.exports = { getDb };
