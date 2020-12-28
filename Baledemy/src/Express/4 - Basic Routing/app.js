const express = require("express");
const app = express();

app.get("/", function (request, response) {
  response.send("bambang");
});

app.get("/about", function (req, res) {
  res.send("about");
});

app.listen(3000, function () {
  console.log("listening to port 3000");
});
