import express from 'express';
import fs from 'fs';

const router = express.Router();
const usersFilePath = './data/users.json';

router.post('/register', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  const users = JSON.parse(fs.readFileSync(usersFilePath));
  const userExists = users.some(user => user.username === username);

  if (userExists) {
    return res.status(400).json({ error: 'User already exists' });
  }

  const newUser = { username, password };
  users.push(newUser);
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));

  res.status(201).json({ message: 'User registered successfully', user: newUser });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  const users = JSON.parse(fs.readFileSync(usersFilePath));
  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    res.status(200).json({ message: 'Login successful', user });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

export default router;