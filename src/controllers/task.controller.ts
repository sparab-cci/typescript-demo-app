// import { NextFunction, Request, Response } from 'express';
import Task, { ITask } from '../models/task.model';
import { RequestHandler } from 'express';


const createTask: RequestHandler = async (req, res, next) => {
    try {
        const body = req.body;
        const task: ITask = new Task({
            title: body.title,
            status: body.status
        })

        const newTask: ITask = await task.save();
        res.status(201).json({
            success: true,
            data: newTask,
            message: "Task has been created"
        });
    } catch (error) {
        res.status(500).json(error);
    }
}

const readTask: RequestHandler = async (req, res, next) => {

    try {
        const task = await Task.findOne({ _id: req.params.id });
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
    } catch (err) {
        res.status(500).json(err);
    }

}

const readAllTask: RequestHandler = async (req, res, next) => {

    try {
        const task: ITask[] = await Task.find();
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
    } catch (err) {
        res.status(500).json(err);
    }

}

const editTask: RequestHandler = async (req, res, next) => {

    try {

        const id = req.params.id;
        console.log("id ", id);
        const body = req.body;
        const updatedTask: ITask | null = await Task.findByIdAndUpdate({ _id: id }, body);
        res.status(200).json({
            success: true,
            data: updatedTask,
            message: "task has been updated successfully"
        });
    } catch (err) {
        res.status(500).json(err);
    }
}

const deleteTask: RequestHandler = async (req, res, next) => {

    try {
        const deletedTask: ITask | null = await Task.findByIdAndDelete(req.params.id);
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
    } catch (err) {
        res.status(500).json(err);
    }
}

export default {
    createTask, readTask, editTask, deleteTask, readAllTask
}