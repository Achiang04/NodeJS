const express = require("express");
const app = express();

// kalau pakai ejs, file ejs nya harus di dalam folder views != error
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index");
});
app.get("/contact", function (req, res) {
  res.render("contact");
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

app.listen(3000);
