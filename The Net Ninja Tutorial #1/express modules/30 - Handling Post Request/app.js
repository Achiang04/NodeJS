const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// kalau pakai ejs, file ejs nya harus di dalam folder views != error
app.set("view engine", "ejs");
// cara manual
// app.use("/assets", function (req, res, next) {
//   console.log(req.url);
//   next();
// });
// cara lebih singkat dari yang di atas
app.use("/assets", express.static("assets"));

app.get("/", function (req, res) {
  res.render("index");
});
app.get("/contact", function (req, res) {
  // ?dept=marketing&person=joe
  // console.log(req.query);
  // { dept: 'marketing', person: 'joe' }
  res.render("contact", { qs: req.query });
});
app.post("/contact", urlencodedParser, function (req, res) {
  console.log(req.body);
  res.render("contact-success", { data: req.body });
});
app.get("/profile/:name", function (req, res) {
  const data = {
    age: 18,
    job: "tidur",
    hobbies: ["sleeping", "eating", "coding"],
  };
  res.render("profile", {
    person: req.params.name,
    data: data,
  });
});

app.listen(3001);
