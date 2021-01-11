const fs = require("fs");

// reading file
// fs.readFile("./readMe.txt", (err, data) => {
//   if (err) console.log(err);
//   console.log(data.toString());
// });

// console.log("last line");

// writing files
// fs.writeFile("./readMe.txt", "hello, world", (err, data) => {
//   console.log("files was written");
// });

// fs.writeFile("./readMe1.txt", "hello, again", (err, data) => {
//   console.log("files was written");
// });

// directories
// fs.mkdir("./assets", (err) => {
//   if (err) console.log(err);
//   console.log("folder created");
// });

// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) console.log(err);
//     console.log("folder created");
//   });
// } else {
//   fs.rmdir("./assets", (err) => {
//     if (err) console.log(err);
//     console.log("folder delete");
//   });
// }

// deleting files
// if (fs.existsSync("./deleteMe copy.txt")) {
//   fs.unlink("./deleteMe copy.txt", (err) => {
//     if (err) console.log(err);
//     console.log("file unlinked / deleted");
//   });
// }
