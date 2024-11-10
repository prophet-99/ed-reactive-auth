const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const [JWT_SECRET] = require('./../config/constants');
const router = express.Router();

const user = {
  email: 'alex@example.com',
  password: bcrypt.hashSync('password123', 10), // Contraseña hasheada
  role: 'Admin',
  cellphone: '+51932265589',
  country: 'Perú',
  lastAccess: new Date().toISOString(),
};

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (email !== user.email) {
    return res.status(400).json({ message: 'Email o contraseña incorrecta' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({ message: 'Email o contraseña incorrecta' });
  }

  const lastAccess = new Date().toISOString();
  user.lastAccess = lastAccess;

  const token = jwt.sign(
    {
      email: user.email,
      role: user.role,
      cellphone: user.cellphone,
      country: user.country,
      lastAccess: user.lastAccess,
    },
    JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.json({ token });
});

module.exports = router;
