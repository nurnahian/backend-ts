import "source-map-support"
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import taskRouter from "./routes/task.js";
// import { logger } from "./middleware/logger.js";
import cors from "cors";
import morgan from "morgan";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "views"));

app.use(express.static(path.join(__dirname, "..", "public")));

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

// app.use(logger);
// Query post methode active
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.render("index", {
    text1: "Hello from EJS New",
  });
});

app.use("/tasks", taskRouter);

app.use(errorHandler);
app.listen(3001, () => {
  console.log("Express is running on 3001");
});
