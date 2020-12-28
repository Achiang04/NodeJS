const express = require("express");
const app = express();
const userRouter = require("./router/users");

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/w-www-form-urlencoded

const myLogger = function (req, res, next) {
  console.log("Logged");
  req.time = new Date();
  next();
};

app.use(myLogger);

app.get("/", function (request, response) {
  const kelas = {
    id: 1,
    nama: "nodejs and express",
    date: request.time.toString(),
  };
  response.json(kelas);
});

app.get("/about", function (req, res) {
  res.redirect("https://expressjs.com/");
});

app.use(userRouter);

app.listen(3000, function () {
  console.log("listening to port 3000");
});
