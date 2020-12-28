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

app.put("/users/:id", function (req, res) {
  const id = req.params;
  // res.send("put users");
  res.send(id);
});

app.delete("/users/:userId", function (req, res) {
  // res.send("delete users");
  res.send(req.params.userId);
});

app.listen(3000, function () {
  console.log("listening to port 3000");
});
