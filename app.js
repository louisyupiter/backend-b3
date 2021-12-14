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
app.get("/", (_req, res) => {
  res.header('Content-type', 'text/html');
    return res.end('<h1>Hello, Secure World!</h1>');
});
app.use("/api/posts", postsRoutes);

app.use(errorHandler);

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
module.exports = app;
