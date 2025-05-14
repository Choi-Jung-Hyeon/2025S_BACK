"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../data/users");
const router = (0, express_1.Router)();
router.post('/register', (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
        res.status(400).json({ error: 'Username and password are required' });
        return;
    }
    const userExists = users_1.Users.some((user) => user.username === username);
    if (userExists) {
        res.status(400).json({ error: 'User already exists' });
        return;
    }
    const newUser = { username, password };
    users_1.Users.push(newUser);
    res.status(201).json({ message: 'User registered successfully', user: newUser });
});
router.post('/login', (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
        res.status(400).json({ error: 'Username and password are required' });
        return;
    }
    const user = users_1.Users.find((user) => user.username === username && user.password === password);
    if (user) {
        res.status(200).json({ message: 'Login successful', user });
    }
    else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});
exports.default = router;
//# sourceMappingURL=auth.js.map