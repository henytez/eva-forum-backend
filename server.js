const pool = require("./server/config/database");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRouter = require("./server/api/users/user.router");
const questionRouter = require("./server/api/questions/question.router"); // Import the question router
const answerRouter = require("./server/api/answer/answer.router");
const port = process.env.PORT || 80;
const app = express();

app.use(cors()); //middle ware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/question", questionRouter);
app.use("/api/answer", answerRouter);

app.listen(port, "0.0.0.0", () =>
  console.log(`Listening at http://localhost:${port}`)
); //
