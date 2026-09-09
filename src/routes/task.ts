import express from "express";

const taskRouter = express.Router();

console.log("TASK ROUTER LOADED");

taskRouter.get("/", (req, res) => {
  res.json({
    tasks: [
      {
        id: 1,
        title: "Task 1",
        completed: false,
      },
    ],
  });
});

taskRouter.get("/:id", (req, res) => {
  res.json({
    task: {
      id: req.params.id,
      title: `Task ${req.params.id}`,
      completed: false,
    },
  });
});

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

export default taskRouter;
