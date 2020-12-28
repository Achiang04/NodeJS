const express = require("express");
const router = express.Router();

let users = [
  { id: 1, name: "asep", email: "asep@yahoo.com" },
  { id: 2, name: "bambang", email: "bambang@gmail.com" },
];

router
  .route("/users")
  .get(function (req, res) {
    res.send(users);
  })
  .post(function (req, res) {
    // console.log(req.body);
    users.push(req.body);
    res.send(users);
  });

router.put("/users/:id", function (req, res) {
  const id = req.params.id;
  users.filter((user) => {
    if (user.id == id) {
      user.id = id;
      user.name = req.body.name;
      user.email = req.body.email;

      return user;
    }
  });
  res.json(users);
});

router.delete("/users/:userId", function (req, res) {
  let id = req.params.userId;
  users = users.filter((user) => user.id != id);
  res.send(users);
});

module.exports = router;
