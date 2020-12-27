const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  console.log("request was made :" + req.url);
  res.writeHead(200, { "Content-Type": "application/json" });
  const myObj = {
    name: "ucup",
    job: "tidur",
    age: 18,
  };
  res.end(JSON.stringify(myObj));
});

server.listen(3001, "127.0.0.1");
console.log("now listening to port 3001");
