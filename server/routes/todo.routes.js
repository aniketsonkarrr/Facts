import { Router } from "express";
import { getAllTodos,getTodo,newTodo,deleteTodo } from "../controller/todo.controller.js";
const router=Router();


router.get("/all",getAllTodos);

router.post("/new",newTodo);

router.delete("/delete/:id",deleteTodo);

router.get("/get/:id",getTodo);


export default router;