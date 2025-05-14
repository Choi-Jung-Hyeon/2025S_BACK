"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const restaurants_1 = require("../data/restaurants");
const router = (0, express_1.Router)();
router.get('/restaurants', (req, res, next) => {
    res.json({ restaurants: restaurants_1.Restaurants });
});
router.get('/restaurants/:name', (req, res, next) => {
    const restaurant = restaurants_1.Restaurants.find((r) => r.name === req.params.name);
    if (restaurant) {
        res.json(restaurant);
    }
    else {
        res.status(404).json({ error: '해당 맛집 정보가 존재하지 않습니다.' });
    }
});
router.post('/restaurants', (req, res, next) => {
    const exists = restaurants_1.Restaurants.some((r) => r.name === req.body.name);
    if (exists) {
        res.status(400).json({ error: '이미 해당 맛집 정보가 존재합니다.' });
        return;
    }
    const newRestaurant = req.body;
    restaurants_1.Restaurants.push(newRestaurant);
    res.status(201).json(newRestaurant);
});
router.delete('/restaurants/:name', (req, res, next) => {
    const index = restaurants_1.Restaurants.findIndex((r) => r.name === req.params.name);
    if (index !== -1) {
        const deletedRestaurant = restaurants_1.Restaurants.splice(index, 1);
        res.json(deletedRestaurant[0]);
    }
    else {
        res.status(404).json({ error: '해당 맛집 정보가 존재하지 않습니다.' });
    }
});
router.patch('/restaurants/:name', (req, res, next) => {
    const index = restaurants_1.Restaurants.findIndex((r) => r.name === req.params.name);
    if (index !== -1) {
        restaurants_1.Restaurants[index] = Object.assign(Object.assign({}, restaurants_1.Restaurants[index]), req.body);
        res.json(restaurants_1.Restaurants[index]);
    }
    else {
        res.status(404).json({ error: '해당 맛집 정보가 존재하지 않습니다.' });
    }
});
exports.default = router;
//# sourceMappingURL=restaurants.js.map