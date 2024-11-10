const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');
const statsRoutes = require('./routes/stats');
app.use('/auth', authRoutes);
app.use('/api', profileRoutes);
app.use('/api', statsRoutes);

app.get('/', (req, res) => {
  res.send('Bienvenido a la API de Express con Autenticación JWT');
});

app.listen(port, () => {
  console.log(`Servidor de Express ejecutándose en http://localhost:${port}`);
});
