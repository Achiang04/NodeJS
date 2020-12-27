const fs = require("fs");

// fs.mkdirSync("stuff");
// fs.rmdirSync("stuff");

// fs.mkdir("stuff", function () {
//   fs.readFile("readMe.txt", "utf8", function (err, data) {
//     fs.writeFile("./stuff/writeMe.txt", data);
//   });
// });

// fs.mkdirSync("stuff", function () {
//   fs.readFileSync("readMe.txt", "utf8", function (err, data) {
//     fs.writeFileSync("./stuff/writeMe.txt", data);
//   });
// });

// fs.unlink("./stuff/writeMe.txt", function (err) {
//   console.log(err);
//   fs.rmdir("stuff");
// });

fs.rmdir("stuff"); // i dont know why i cant remove the file if im not using synchronous
