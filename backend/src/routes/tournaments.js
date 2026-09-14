const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Tournaments endpoint' });
});

module.exports = router;
