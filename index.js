const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  console.log(`Request received: ${req.url}`);  // DEBUG: vezi exact ce URL primești
  let filepath;

  if (req.url === "/") {
    filepath = "./routes/index.html";
  } else if (req.url === "/about") {
    filepath = "./routes/about.html";
  } else if (req.url === "/contact-me") {
    filepath = "./routes/contact-me.html";
  } else {
    filepath = "./routes/404.html";
  }

  fs.readFile(filepath, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end("Server error");
      return;
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
});

const PORT = 8080;

server.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}/`);
});
