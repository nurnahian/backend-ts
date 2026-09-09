import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import taskRouter from "./routes/task.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "views"));

app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index", {
    text1: "Hello from EJS New",
  });
});

app.use("/tasks", taskRouter);

app.listen(3001, () => {
  console.log("Express is running on 3001");
});
