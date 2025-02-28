import express from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  updateTask,
} from "../controllers/task.controller";

const router = express.Router();

router.get("/tasks", getAllTasks);
router.post("/tasks", createTask);
router.put("/tasks/:taskId", updateTask);
router.delete("/tasks/:taskId", deleteTask);

export default router;
