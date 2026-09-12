import express from "express";
import { auth } from "../middleware/auth.js";

const taskRouter = express.Router();

console.log("TASK ROUTER LOADED");

taskRouter.get("/", (req, res) => {
  const search = req.query.search as string | undefined;
  if (search) {
    return res.json({
      task: [{ id: 1, title: `${search}`, completed: false }],
    });
  }
  res.json({
    tasks: [
      { id: 1, title: "Task 1", completed: false },
      { id: 2, title: "Task 2", completed: false },
    ],
  });

  // res.json({
  //   tasks: [
  //     {
  //       id: 1,
  //       title: "Task 1",
  //       completed: false,
  //     },
  //   ],
  // });
});

taskRouter.get("/:id", (req, res) => {
  throw new Error("Something went wrong");
  res.json({
    task: {
      id: req.params.id,
      title: `Task ${req.params.id}`,
      completed: false,
    },
  });
});
taskRouter.use(auth);
taskRouter.post("/", (req, res) => {
  const title = req.body.title;
  const completed = req.body.completed;
  res.json({
    task: {
      title,
      completed,
    },
  });
});

taskRouter.put("/:id", (req, res) => {
  const taskId = req.params.id;
  res.json({
    task: { id: taskId, title: req.body.title, completed: req.body.completed },
  });
});

taskRouter.delete("/:id", auth, (req, res) => {
  const taskId = req.params.id;
  res.json({ message: `Task with id ${taskId} deleted` });
});

export default taskRouter;
