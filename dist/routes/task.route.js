"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const task_controller_1 = __importDefault(require("../controllers/task.controller"));
const router = express_1.default.Router();
router.route('/').post(task_controller_1.default.createTask);
router.route('/update/:id').patch(task_controller_1.default.editTask);
router.route('/delete/:id').delete(task_controller_1.default.deleteTask);
router.route('/').get(task_controller_1.default.readAllTask);
router.route('/:id').get(task_controller_1.default.readTask);
module.exports = router;
