"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const db_1 = __importDefault(require("./config/db"));
const body_parser_1 = __importDefault(require("body-parser"));
const task_route_1 = __importDefault(require("./routes/task.route"));
(0, dotenv_1.config)(); // runs all environment variables inside .env file
(0, db_1.default)();
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use('/api/task', task_route_1.default);
const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500).send({
        status: err.status || 500,
        message: err.message
    });
};
app.use(errorHandler);
const port = Number(process.env.PORT) || 3000;
const server = app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
