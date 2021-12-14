const path = require("path");
const express = require("express");
const mongooseConnect = require("./configs/db");
const errorHandler = require("./middlewares/errorHandler");
const app = express();
const cors = require("cors");
// const port = 3000;

const postsRoutes = require("./routes/posts");

app.use(cors());

mongooseConnect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static(path.join("images")));
const Post = require("../models/Post");
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/api", async (req, res, next) => {
  try {
    const result = await Post.find({});
    if (result.length === 0) {
      throw { name: "NOT_FOUND" };
    } else {
      res.status(200).json({ message: "success", result: result });
    }
  } catch (error) {
    next(error);
  }
});
app.use("/api/posts", postsRoutes);

app.use(errorHandler);

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
module.exports = app;
