const express = require("express");
const router = express.Router();

const users = [
  { id: 1, name: "asep", email: "asep@yahoo.com" },
  { id: 2, name: "bambang", email: "bambang@gmail.com" },
];

router
  .route("/users")
  .get(function (req, res) {
    res.send(users);
  })
  .post(function (req, res) {
    res.send("post users");
  });

router.put("/users/:id", function (req, res) {
  const id = req.params;
  res.send(id);
});

router.delete("/users/:userId", function (req, res) {
  res.send(req.params.userId);
});

module.exports = router;
