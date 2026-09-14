const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { getDb } = require('../database');
const { authMiddleware, JWT_SECRET } = require('../authMiddleware');

const router = express.Router();

// Helper to sign token
function generateToken(user) {
  return jwt.sign(
    { id: user.id, name: user.name, email: user.email },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
}

// REGISTER
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Passwords do not match.' });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters long.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address format.' });
    }

    const db = await getDb();

    // Check existing email
    const existing = await db.get('SELECT id FROM users WHERE email = ?', [email.toLowerCase().trim()]);
    if (existing) {
      return res.status(400).json({ error: 'An account with this email already exists. Please sign in.' });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const result = await db.run(
      'INSERT INTO users (name, full_name, email, password_hash, theme_preference) VALUES (?, ?, ?, ?, ?)',
      [name.trim(), name.trim(), email.toLowerCase().trim(), passwordHash, 'dark']
    );

    const user = { id: result.lastID, name: name.trim(), full_name: name.trim(), email: email.toLowerCase().trim(), theme_preference: 'dark' };
    const token = generateToken(user);

    // Give welcome achievement
    await db.run(
      'INSERT OR IGNORE INTO achievements (user_id, badge_code, badge_name, badge_desc) VALUES (?, ?, ?, ?)',
      [user.id, 'WELCOME', '🌟 Joined PrepNex', 'Started placement preparation journey with PrepNex.']
    );

    res.status(201).json({ token, user });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ error: 'Server error during registration.' });
  }
});

// LOGIN
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required.' });
    }

    const db = await getDb();
    const user = await db.get('SELECT * FROM users WHERE email = ?', [email.toLowerCase().trim()]);

    if (!user) {
      return res.status(401).json({ error: 'Incorrect email or password.' });
    }

    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      return res.status(401).json({ error: 'Incorrect email or password.' });
    }

    const token = generateToken(user);
    const userObj = {
      id: user.id,
      name: user.name || user.full_name,
      full_name: user.full_name || user.name,
      email: user.email,
      theme_preference: user.theme_preference || 'dark'
    };

    res.json({ token, user: userObj });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Server error during login.' });
  }
});

// FORGOT PASSWORD / REQUEST RESET
router.post('/forgot-password', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: 'Email is required.' });

    const db = await getDb();
    const user = await db.get('SELECT id FROM users WHERE email = ?', [email.toLowerCase().trim()]);

    if (!user) {
      return res.status(404).json({ error: 'No account found with this email address.' });
    }

    // Generate a 6-digit reset code
    const resetToken = Math.floor(100000 + Math.random() * 900000).toString();
    await db.run('UPDATE users SET reset_token = ? WHERE id = ?', [resetToken, user.id]);

    res.json({ message: 'Password reset code sent successfully.', resetCode: resetToken });
  } catch (err) {
    console.error('Forgot password error:', err);
    res.status(500).json({ error: 'Server error.' });
  }
});

// RESET PASSWORD
router.post('/reset-password', async (req, res) => {
  try {
    const { email, resetCode, newPassword } = req.body;
    if (!email || !resetCode || !newPassword) {
      return res.status(400).json({ error: 'Email, reset code and new password are required.' });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters.' });
    }

    const db = await getDb();
    const user = await db.get('SELECT * FROM users WHERE email = ? AND reset_token = ?', [email.toLowerCase().trim(), resetCode]);

    if (!user) {
      return res.status(400).json({ error: 'Invalid reset code or email.' });
    }

    const passwordHash = await bcrypt.hash(newPassword, 10);
    await db.run('UPDATE users SET password_hash = ?, reset_token = NULL WHERE id = ?', [passwordHash, user.id]);

    res.json({ message: 'Password reset successful! You can now log in.' });
  } catch (err) {
    console.error('Reset password error:', err);
    res.status(500).json({ error: 'Server error.' });
  }
});

// GET CURRENT USER ME
router.get('/me', authMiddleware, async (req, res) => {
  try {
    const db = await getDb();
    const user = await db.get('SELECT id, name, full_name, email, theme_preference, created_at FROM users WHERE id = ?', [req.user.id]);
    if (!user) return res.status(404).json({ error: 'User not found' });
    const userObj = {
      ...user,
      full_name: user.full_name || user.name,
      name: user.name || user.full_name
    };
    res.json({ user: userObj });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// UPDATE THEME PREFERENCE
router.put('/theme', authMiddleware, async (req, res) => {
  try {
    const { theme } = req.body;
    if (!['dark', 'light'].includes(theme)) {
      return res.status(400).json({ error: 'Theme must be dark or light.' });
    }

    const db = await getDb();
    await db.run('UPDATE users SET theme_preference = ? WHERE id = ?', [theme, req.user.id]);
    res.json({ message: 'Theme updated', theme });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
