"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const express_1 = __importDefault(require("express"));
const serverless_http_1 = __importDefault(require("serverless-http"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    return res.status(200).json({ message: 'Hello world!' });
});
exports.handler = (0, serverless_http_1.default)(app);
//# sourceMappingURL=index.js.map