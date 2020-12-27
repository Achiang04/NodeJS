const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  console.log("request was made :" + req.url);
  res.writeHead(200, { "Content-Type": "text/plain" });

  const myReadStream = fs.createReadStream(__dirname + "/readMe.txt", "utf8");
  myReadStream.pipe(res);
});

server.listen(3000, "127.0.0.1");
console.log("now listening to port 3000");
