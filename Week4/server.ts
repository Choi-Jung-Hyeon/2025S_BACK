import express from 'express';
import restaurantsRouter from './routes/restaurants.js';
import authRouter from './routes/auth.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api', restaurantsRouter);
app.use('/api', authRouter);

app.get('/', (req, res) => {
  res.send('율전 맛집');
});

// challenge 일단 해봤다도르
app.use((req, res, next) => {
    const clientIp = req.ip || req.connection.remoteAddress;
    console.log(`Client IP: ${clientIp}`);
    next();
  });
app.use((req, res) => {
  res.status(404).json({ error: 'Page not found' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});