const express = require("express");
const app = express();
const path = require("path");
// this comment should appear
// this comment should appear again
global.env =
  process.env.NODE_ENV === undefined ? "development" : process.env.NODE_ENV;
require("dotenv").config({
  path: global.env === "development" ? ".env.development" : ".env.production"
});

var http_port = 4000;
if (process.env.NODE_ENV === "production") {
  http_port = process.env.PORT;
}

app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(http_port, () => {
  console.log("Server running on port " + http_port);
});
