import express from "express";
import mongoose from "mongoose";
import healthController from "./controller/healthController";
// import postController from "./controller/postController";

const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost/test", {useNewUrlParser: true});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    // we're connected!
});

const getRouter = () => express.Router({
  mergeParams: true,
});

app.use("/health", healthController(getRouter()));
// app.use("/post", postController(getRouter()));

app.listen(port);
