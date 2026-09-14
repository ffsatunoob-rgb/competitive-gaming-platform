const { body, validationResult } = require('express-validator');

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array().map(err => ({ field: err.param, message: err.msg }))
    });
  }
  next();
};

const validateEmail = body('email').isEmail().normalizeEmail();
const validatePassword = body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters');
const validateUsername = body('username').isLength({ min: 3, max: 20 }).matches(/^[a-zA-Z0-9_-]+$/);

module.exports = {
  handleValidationErrors,
  validateEmail,
  validatePassword,
  validateUsername
};
