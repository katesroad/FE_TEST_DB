"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.post('api/v1/users', (req, res) => {
    res.json({});
});
exports.default = app;
//# sourceMappingURL=app.js.map