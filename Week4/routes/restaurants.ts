import { Router, Request, Response, NextFunction } from 'express';
import { Restaurants, Restaurant } from '../data/restaurants'; // 소스 파일에서 임포트

const router = Router();

// GET /restaurants - 전체 맛집 목록 반환
router.get('/restaurants', (req: Request, res: Response, next: NextFunction): void => {
  res.json({ restaurants: Restaurants });
});

// GET /restaurants/:name - 특정 맛집 정보 반환
router.get('/restaurants/:name', (req: Request, res: Response, next: NextFunction): void => {
  const restaurant = Restaurants.find((r: Restaurant) => r.name === req.params.name);
  if (restaurant) {
    res.json(restaurant);
  } else {
    res.status(404).json({ error: '해당 맛집 정보가 존재하지 않습니다.' });
  }
});

// POST /restaurants - 맛집 정보 생성
router.post('/restaurants', (req: Request, res: Response, next: NextFunction): void => {
  const exists = Restaurants.some((r: Restaurant) => r.name === req.body.name);
  if (exists) {
    res.status(400).json({ error: '이미 해당 맛집 정보가 존재합니다.' });
    return;
  }
  const newRestaurant: Restaurant = req.body;
  Restaurants.push(newRestaurant);
  res.status(201).json(newRestaurant);
});

// DELETE /restaurants/:name - 특정 맛집 정보 삭제
router.delete('/restaurants/:name', (req: Request, res: Response, next: NextFunction): void => {
  const index = Restaurants.findIndex((r: Restaurant) => r.name === req.params.name);
  if (index !== -1) {
    const deletedRestaurant = Restaurants.splice(index, 1);
    res.json(deletedRestaurant[0]);
  } else {
    res.status(404).json({ error: '해당 맛집 정보가 존재하지 않습니다.' });
  }
});

// PATCH /restaurants/:name - 특정 맛집 정보 수정
router.patch('/restaurants/:name', (req: Request, res: Response, next: NextFunction): void => {
  const index = Restaurants.findIndex((r: Restaurant) => r.name === req.params.name);
  if (index !== -1) {
    Restaurants[index] = { ...Restaurants[index], ...req.body };
    res.json(Restaurants[index]);
  } else {
    res.status(404).json({ error: '해당 맛집 정보가 존재하지 않습니다.' });
  }
});

export default router;