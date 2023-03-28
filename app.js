// Name: Steven Nazaroff
// Email: stn223@lehigh.edu
// Class number: CSE 264
// Assignment number/name: hw5

const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));



app.use(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Invalid Request.");
});

app.listen(3000);
