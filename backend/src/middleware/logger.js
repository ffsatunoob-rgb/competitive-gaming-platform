const fs = require('fs');
const path = require('path');

const logDir = path.join(__dirname, '../../logs');

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

const requestLogger = (req, res, next) => {
  const log = `${new Date().toISOString()} - ${req.method} ${req.path} - ${req.ip}\n`;
  fs.appendFileSync(path.join(logDir, 'app.log'), log);
  next();
};

module.exports = { requestLogger };
