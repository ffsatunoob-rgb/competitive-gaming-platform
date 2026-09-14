const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const { pool, redisClient } = require('../config/database');
const { generateAccessToken, generateRefreshToken } = require('../middleware/auth');

class AccountService {
  async createAccount(userData) {
    const { email, password, username, firstName, lastName } = userData;
    
    try {
      const existingUser = await pool.query(
        'SELECT id FROM users WHERE email = $1 OR username = $2',
        [email, username]
      );

      if (existingUser.rows.length > 0) {
        throw new Error('Email or username already exists');
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const userId = uuidv4();

      const result = await pool.query(
        `INSERT INTO users (id, email, username, password_hash, first_name, last_name, status, created_at)
         VALUES ($1, $2, $3, $4, $5, $6, $7, NOW())
         RETURNING id, email, username, first_name, last_name`,
        [userId, email, username, hashedPassword, firstName, lastName, 'active']
      );

      return {
        success: true,
        user: result.rows[0],
        message: 'Account created successfully'
      };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new AccountService();
