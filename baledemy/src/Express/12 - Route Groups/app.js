const express = require("express");
const app = express();

app.get("/", function (request, response) {
  const kelas = {
    id: 1,
    nama: "nodejs and express",
  };
  response.json(kelas);
});

app.get("/about", function (req, res) {
  // res.redirect("/users"); // redirect local
  res.redirect("https://expressjs.com/");
});

app
  .route("/users")
  .get(function (req, res) {
    res.send("Get users");
  })
  .post(function (req, res) {
    res.send("post users");
  });

app.put("/users/:id", function (req, res) {
  const id = req.params;
  res.send(id);
});

app.delete("/users/:userId", function (req, res) {
  res.send(req.params.userId);
});

app.listen(3000, function () {
  console.log("listening to port 3000");
});
