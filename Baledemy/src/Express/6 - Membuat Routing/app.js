const express = require("express");
const app = express();

app.get("/", function (request, response) {
  response.send("Home");
});

app.get("/about", function (req, res) {
  res.send("About");
});

app.get("/users", function (req, res) {
  res.send("Get users");
});

app.post("/users", function (req, res) {
  res.send("post users");
});

app.put("/users", function (req, res) {
  res.send("put users");
});

app.delete("/users", function (req, res) {
  res.send("delete users");
});

app.listen(3000, function () {
  console.log("listening to port 3000");
});
