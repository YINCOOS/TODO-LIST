import express from "express";
import {createTodo, deleteTodo, getTodo, updateTodo} from "../controller/todoController";

const router = express.Router();

router.post('/create',createTodo);
router.get('/get-all-todos',getTodo);
router.patch('/:id', updateTodo)
router.delete('/:id', deleteTodo)
export default router;