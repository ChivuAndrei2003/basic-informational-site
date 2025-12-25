//* REFACTOR IN EXPRESS *//

const express = require("express");
const path = require("path");

const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "routes/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "routes/about.html"));
});
app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, "routes/contact-me.html"));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "routes/404.html"));
});

app.listen(PORT, () => {
  console.log(` Express server started on http://localhost:${PORT}/`);
});

//express
