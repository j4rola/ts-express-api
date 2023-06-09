"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const stringService_1 = require("./services/stringService");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.send((0, stringService_1.getCustomString)('My Custom String'));
});
app.get('/test', (req, res) => {
    res.send('test');
});
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
//# sourceMappingURL=index.js.map