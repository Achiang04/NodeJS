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

// cara kedua
const express = new Kelas();
express.judul = "express";
express.deskripsi = "belajar express";

express.save(function (err, data) {
  if (err) console.log(err);
  console.log(data);
  console.log("success save data");
});

// cara ketiga
Kelas.create(
  {
    judul: "mongoDB",
    deskripsi: "belajar mongoDB",
  },
  function (err, data) {
    if (err) console.log(err);
    console.log(data);
    console.log("succes create class");
  }
);
