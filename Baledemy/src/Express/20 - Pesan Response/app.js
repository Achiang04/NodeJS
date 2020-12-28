const express = require("express");
const app = express();
const userRouter = require("./users");

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/w-www-form-urlencoded

app.get("/", function (request, response) {
  const kelas = {
    id: 1,
    nama: "nodejs and express",
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
