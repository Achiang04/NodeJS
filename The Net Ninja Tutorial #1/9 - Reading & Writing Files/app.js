const fs = require("fs");

const readMe = fs.readFileSync("readMe.txt", "utf-8");
console.log("sync", readMe);

fs.writeFileSync("writeMe.txt", readMe);
fs.writeFileSync("writeMe1.txt", "bodo amat mati aja");

// fs.unlink("writeMe.txt");
// fs.writeFile("writeMe2.txt", readMe);

fs.readFile("readMe.txt", "utf8", function (err, data) {
  console.log("async", data);
  console.log(err);
  // fs.writeFile("writeMe2.txt", data);
});

console.log("test");
