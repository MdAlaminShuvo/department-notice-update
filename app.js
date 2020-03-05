const express = require("express");
const noticeRouter = require("./routes/noticeRoutes");

const app = express();

//Middleware
app.use(express.json());

//Route
app.use("/department/notice", noticeRouter);

//export app
module.exports = app;
