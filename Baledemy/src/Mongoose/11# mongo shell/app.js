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

Kelas.find(function (err, data) {
  if (err) console.log(err);
  console.log(data);
});

/*
note to run mongo shell
1. mongo = untuk run mongos shell
2. show databases = untuk show semua databases 
3. use (nama folder) = untuk masuk folder kayak cd di terminal
    use tutorial
4. db.(nama folder) = bisa jalankan beberapa sintaks contoh nya
    db.kelas.find = karena find dia bakal nampilin semua data yang ada di db
*/
