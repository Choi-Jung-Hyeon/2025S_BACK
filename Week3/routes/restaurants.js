import express from 'express';
import fs from 'fs';

const router = express.Router();
const DATA_PATH = './data/restaurants.json';

// GET /restaurants - 전체 맛집 목록 반환
router.get('/restaurants', (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_PATH));
  res.json({ restaurants: data });
});

// GET /restaurants/:name - 특정 맛집 정보 반환
router.get('/restaurants/:name', (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_PATH));
  const restaurant = data.find(r => r.name === req.params.name);
  if (restaurant) {
    res.json(restaurant);
  } else {
    res.status(404).json({ error: '해당 맛집 정보가 존재하지 않습니다.' });
  }
});

// POST /restaurants - 맛집 정보 생성
router.post('/restaurants', (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_PATH));
  const exists = data.some(r => r.name === req.body.name);

  if (exists) {
    res.status(400).json({ error: '이미 해당 맛집 정보가 존재합니다.' });
  } else {
    data.push(req.body);
    fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
    res.status(201).json(req.body);
  }
});

// DELETE /restaurants/:name - 특정 맛집 정보 삭제
router.delete('/restaurants/:name', (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_PATH));
  const index = data.findIndex(r => r.name === req.params.name);

  if (index !== -1) {
    const deletedRestaurant = data.splice(index, 1);
    fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
    res.json(deletedRestaurant[0]);
  } else {
    res.status(404).json({ error: '해당 맛집 정보가 존재하지 않습니다.' });
  }
});

// PATCH /restaurants/:name - 특정 맛집 정보 수정
router.patch('/restaurants/:name', (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_PATH));
  const index = data.findIndex(r => r.name === req.params.name);

  if (index !== -1) {
    data[index] = { ...data[index], ...req.body };
    fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
    res.json(data[index]);
  } else {
    res.status(404).json({ error: '해당 맛집 정보가 존재하지 않습니다.' });
  }
});

export default router;