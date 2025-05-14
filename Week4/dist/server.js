"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const restaurants_js_1 = __importDefault(require("./routes/restaurants.js"));
const auth_js_1 = __importDefault(require("./routes/auth.js"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.use('/api', restaurants_js_1.default);
app.use('/api', auth_js_1.default);
app.get('/', (req, res) => {
    res.send('율전 맛집');
});
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
//# sourceMappingURL=server.js.map