import { Router, Request, Response, NextFunction } from 'express';
import { Users, User } from '../data/users'; // 올바른 소스 파일 경로 사용

const router = Router();

// 회원가입 엔드포인트
router.post('/register', (req: Request, res: Response, next: NextFunction): void => {
  const { username, password } = req.body;
  
  if (!username || !password) {
    res.status(400).json({ error: 'Username and password are required' });
    return;
  }
  
  const userExists = Users.some((user: User) => user.username === username);
  if (userExists) {
    res.status(400).json({ error: 'User already exists' });
    return;
  }
  
  const newUser: User = { username, password };
  Users.push(newUser);
  res.status(201).json({ message: 'User registered successfully', user: newUser });
});

// 로그인 엔드포인트
router.post('/login', (req: Request, res: Response, next: NextFunction): void => {
  const { username, password } = req.body;
  
  if (!username || !password) {
    res.status(400).json({ error: 'Username and password are required' });
    return;
  }
  
  const user = Users.find((user: User) => user.username === username && user.password === password);
  if (user) {
    res.status(200).json({ message: 'Login successful', user });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

export default router;