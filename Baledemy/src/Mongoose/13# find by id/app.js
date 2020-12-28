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

// kalau mau cari hanya dengan keyword tertentu pakai cara 2
// cara 1 ga akan muncul , dia hanya berlaku untuk keyword yang udah fix

// cara 1
Kelas.find({ judul: "js" }, function (err, data) {
  if (err) console.log(err);
  console.log("cara 1", data);
});
// cara 2
Kelas.find({ judul: /js/ }, function (err, data) {
  if (err) console.log(err);
  console.log("cara 2", data);
});

// ini cara kalau mau nampilkan data tertentu
// isi paramaeter kedua dengan key
Kelas.find({ judul: /js/ }, "judul deskripsi", function (err, data) {
  if (err) console.log(err);
  console.log("nampilin data tertentu", data);
});

// find by id
Kelas.findById("5fe88879101b3a400ad59880", function (err, data) {
  if (err) console.log(err);
  console.log("find by id", data);
});
