const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// connect to the database
// mongoose.connect("mongodb+srv://learn-mongodb.mizku.mongodb.net/bambang");
mongoose.connect("mongodb://localhost:27017/bambang", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// create a schema  - this is like a blueprint
const todoSchema = new mongoose.Schema({
  item: String,
});

const Todo = mongoose.model("Todo", todoSchema);
// const itemOne = Todo({ item: "buy food" }).save(function (err) {
//   if (err) throw err;
//   console.log("item saved");
// });

const urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function (app) {
  app.get("/todo", function (req, res) {
    // get data from mongodb and pass it to the view
    // Todo.find({ item: "buy flowers" }); // find specific object
    Todo.find({}, function (err, data) {
      if (err) throw err;
      res.render("todo", { todos: data });
    });
  });
  app.post("/todo", urlencodedParser, function (req, res) {
    // console.log(req.body);
    //get data from the view and add it to mongodb
    const newTodo = Todo(req.body).save(function (err, data) {
      if (err) throw err;
      res.json(data);
    });
  });
  app.delete("/todo/:item", function (req, res) {
    // delete the requested item from mongodb
    Todo.find({ item: req.params.item.replace(/\-/g, " ") }).remove(function (
      err,
      data
    ) {
      if (err) throw err;
      res.json(data);
    });
  });
};
