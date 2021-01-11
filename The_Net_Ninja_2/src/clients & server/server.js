const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const server = http.createServer((req, res) => {
  //   console.log("request made");
  console.log(req.url, req.method);

  // lodash
  const num = _.random(0, 20);
  console.log(num);

  const greet = _.once(() => {
    console.log("hello");
  });

  greet();

  // set header content type (text/plain)
  //   res.setHeader("Content-Type", "text/plain");
  //   res.write("woi bambang");

  // set header content type (text/html)
  res.setHeader("Content-Type", "text/html");

  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  //   res.write(`<head> <link rel="stylesheet" href="#"></head>`);
  //   res.write("<p>woi bambang</p>");
  //   res.write("<p>mati aja kau sana</p>");
  //   res.end();

  // send an html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      //   res.write(data);
      // kalau data yang dikirim cuman satu bisa langsung dimasukin ke bawah
      // res.end(data);
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening to port 3000");
});
