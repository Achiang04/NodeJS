const mongoose = require("mongoose");

// connect database
mongoose.disconnect("mongodb://localhost/tutorial", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
