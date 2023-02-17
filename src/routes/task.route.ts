import express from 'express';
import controller from '../controllers/task.controller';

const router =  express.Router();

router.route('/').post(controller.createTask);
router.route('/update/:id').patch(controller.editTask);
router.route('/delete/:id').delete(controller.deleteTask);
router.route('/').get(controller.readAllTask);
router.route('/:id').get(controller.readTask);

export = router
