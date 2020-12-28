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

// find itu mencari semua apabila syarat nya sama
// contoh kalau nyari nama dan namanya lebih dari satu bakal di tampilin smeuanya
Kelas.find({ judul: "nodejs" }, function (err, data) {
  if (err) console.log(err);
  console.log(data);
});
Kelas.find({ judul: "bambang" }, function (err, data) {
  if (err) console.log(err);
  console.log(data);
});

// findOne hanya mencari yang pertama x ketemu
Kelas.findOne({ judul: "mongoDB" }, function (err, data) {
  if (err) console.log(err);
  console.log(data);
});
