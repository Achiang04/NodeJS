const fs = require("fs");

const readStream = fs.createReadStream("./cerita.txt", { encoding: "utf8" });
// kalau ga pake utf cara baca datanya harus convert dulu ke string pake .toString()
// tapi kalau pake utf bisa langsung data aja

// readStream.on("data", (chunk) => {
//   console.log("==== New Chunk =====");
//   console.log(chunk);
//   //   console.log(chunk.toString());
// });

const writeStream = fs.createWriteStream("./cerita2.txt");

// readStream.on("data", (chunk) => {
//   console.log("==== New Chunk =====");
//   console.log(chunk);
//   writeStream.write("\n==== New Chunk ====\n");
//   writeStream.write(chunk);
// });

// pipe
readStream.pipe(writeStream);
