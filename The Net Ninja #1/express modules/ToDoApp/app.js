const express = require("express");
const todoController = require("./controllers/todoController");

const app = express();

// set up template engine
app.set("view engine", "ejs");

// static files
app.use(express.static("./assets"));

// fire controller
todoController(app);

// listen to port
app.listen(3001);
console.log("listening to port 3001");
