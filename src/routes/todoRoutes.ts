import express from "express";
import {createTodo} from "../controller/todoController";

const router = express.Router();

router.post('/create',createTodo);
router.get('/get-all-todos',createTodo);

export default router;