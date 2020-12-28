const express = require("express");
const app = express();

// app.get()
// app.get(path, callback)
// ini akan melakukan request ke server

app.get("/", function (request, response) {
  response.send("bambang");
});

app.listen(3000, function () {
  console.log("listening to port 3000");
});
