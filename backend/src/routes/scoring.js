const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Scoring endpoint' });
});

module.exports = router;
