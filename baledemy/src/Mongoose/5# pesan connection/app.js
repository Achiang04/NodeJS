const mongoose = require("mongoose");

// connect database
mongoose.connect("mongodb://localhost/tutorial", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", function (err) {
  console.log(err);
});
db.once("open", function () {
  console.log("connected");
});
