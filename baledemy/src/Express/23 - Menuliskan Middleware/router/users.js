const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");

router.route("/users").get(userController.get).post(userController.post);

router.put("/users/:id", userController.put);

router.delete("/users/:userId", userController.delete);

module.exports = router;
