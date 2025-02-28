import { PrismaClient, TaskColor } from "@prisma/client";
import { Request, Response } from "express";
import status from "http-status";

const prisma = new PrismaClient();

type Task = {
  id: string;
  title: string;
  color: TaskColor;
  completed: boolean;
};

const updateTask = async (req: Request, res: Response): Promise<any> => {
  const { taskId } = req.params;

  if (
    !req.body.title ||
    !req.body.color ||
    !req.body.hasOwnProperty("completed")
  ) {
    return res
      .status(status.BAD_REQUEST)
      .send({ error: "missing task arguments" });
  }

  const { title, color, completed }: Task = req.body;

  try {
    const taskdb = await prisma.task.update({
      where: { id: +taskId },
      data: { title, color, completed },
    });

    return res.status(status.OK).send(taskdb);
  } catch (error) {
    return res.status(status.INTERNAL_SERVER_ERROR);
  }
};

const getAllTasks = async (req: Request, res: Response): Promise<any> => {
  try {
    const tasks = await prisma.task.findMany();

    return res.status(status.OK).send(tasks);
  } catch (error) {
    return res.status(status.INTERNAL_SERVER_ERROR).send(error);
  }
};

const createTask = async (req: Request, res: Response): Promise<any> => {
  const { title, color, completed }: Task = req.body;
  if (!title || !color || !completed) {
    res.status(status.BAD_REQUEST).send({ error: "missing task arguments" });
  }

  try {
    const taskdb = await prisma.task.create({
      data: { title, color, completed },
    });

    return res.status(status.OK).send(taskdb);
  } catch (error) {
    return res.status(status.INTERNAL_SERVER_ERROR).send(error);
  }
};

const deleteTask = async (req: Request, res: Response): Promise<any> => {
  const { taskId } = req.params;

  try {
    await prisma.task.delete({
      where: {
        id: +taskId,
      },
    });

    return res.status(status.OK).send({ message: "successful" });
  } catch (error) {
    return res.status(status.INTERNAL_SERVER_ERROR).send(error);
  }
};

export { createTask, deleteTask, getAllTasks, updateTask };
