const path = require('path');
const express = require("express");
const mongooseConnect = require("./configs/db");
const errorHandler = require("./middlewares/errorHandler");
const app = express();
// const port = 3000;

const http = require('http');
const port = process.env.PORT || 3000


const postsRoutes = require('./routes/posts')

mongooseConnect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/images', express.static(path.join('images')));

app.use("/api/posts", postsRoutes);

app.use(errorHandler);

app.get('/', (req,res)=>{
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World</h1>')
})

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

const server = http.createServer(app);

server.listen(port,() => {
  console.log(`Server running at port `+port);
});