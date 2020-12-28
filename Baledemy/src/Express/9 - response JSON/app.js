const express = require("express");
const app = express();

// menjalankan method HTTP get harus ada send response apabila enggak
// dia ga akan jalan (reload terus)
// contoh dibawah
// app.get("/", function (request, response) {
//   console.log("test");
// });

app.get("/", function (request, response) {
  // response.send("<h1>test tag html</h1>"); // bisa pakai tag html juga
  const kelas = {
    id: 1,
    nama: "nodejs",
  };
  // response.send(kelas);
  response.json(kelas);
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
  res.send(id);
});

app.delete("/users/:userId", function (req, res) {
  res.send(req.params.userId);
});

app.listen(3000, function () {
  console.log("listening to port 3000");
});
