const express = require("express");
const router = express.Router();

router
  .route("/users")
  .get(function (req, res) {
    res.send("Get users");
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
