"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { NextFunction, Request, Response } from 'express';
const task_model_1 = __importDefault(require("../models/task.model"));
const createTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const task = new task_model_1.default({
            title: body.title,
            status: body.status
        });
        const newTask = yield task.save();
        res.status(201).json({
            success: true,
            data: newTask,
            message: "Task has been created"
        });
    }
    catch (error) {
        res.status(500).json(error);
    }
});
const readTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield task_model_1.default.findOne({ _id: req.params.id });
        return task ?
            res.status(200).json({
                success: true,
                data: task,
                message: "Data fetched"
            })
            : res.status(404).json({
                success: false,
                data: null,
                message: "Not found"
            });
    }
    catch (err) {
        res.status(500).json(err);
    }
});
const readAllTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield task_model_1.default.find();
        return task ?
            res.status(200).json({
                success: true,
                data: task,
                message: "Data fetched"
            })
            : res.status(404).json({
                success: true,
                data: null,
                message: "Not found"
            });
    }
    catch (err) {
        res.status(500).json(err);
    }
});
const editTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        console.log("id ", id);
        const body = req.body;
        const updatedTask = yield task_model_1.default.findByIdAndUpdate({ _id: id }, body);
        res.status(200).json({
            success: true,
            data: updatedTask,
            message: "task has been updated successfully"
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
});
const deleteTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedTask = yield task_model_1.default.findByIdAndDelete(req.params.id);
        return deletedTask ?
            res.status(200).json({
                success: true,
                data: deletedTask,
                message: "Task deleted"
            })
            : res.status(404).json({
                success: false,
                data: null,
                message: "Not found"
            });
    }
    catch (err) {
        res.status(500).json(err);
    }
});
exports.default = {
    createTask, readTask, editTask, deleteTask, readAllTask
};
