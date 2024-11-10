const express = require('express');
const authenticateToken = require('./../middlewares/auth-token.middleware');
const router = express.Router();

router.get('/biography', authenticateToken, (req, res) => {
  const biography = `Esta es la biografía de ${req.user.email}, quien tiene el rol de ${req.user.role}. Vive en ${req.user.country}.`;

  res.json({ biography });
});

module.exports = router;
