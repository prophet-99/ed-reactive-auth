const express = require('express');
const authenticateToken = require('./../middlewares/auth-token.middleware');
const router = express.Router();

router.get('/stats', authenticateToken, (req, res) => {
  const statistics = {
    customers: 2580,
    suppliers: 487,
  };

  res.json(statistics);
});

module.exports = router;
