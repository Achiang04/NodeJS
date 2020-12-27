const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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

const kelasSchema = new Schema({
  judul: String,
  deskripsi: String,
  tanggalPosting: {
    type: Date,
    default: Date.now,
  },
});

const Kelas = mongoose.model("kelas", kelasSchema);

// const query = Kelas.find({ judul: "nodejs" });
// const query = Kelas.findOne({ judul: "nodejs" });
const query = Kelas.findById("5fe88879101b3a400ad59880");

// kalau mau nampilin hasil tertentu
query.select("judul deskripsi");

query.exec(function (err, data) {
  if (err) console.log(err);

  console.log(data);
});
