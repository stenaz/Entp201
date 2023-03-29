// Name: Steven Nazaroff
// Email: stn223@lehigh.edu
// Class number: CSE 264
// Assignment number/name: hw5

const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

const apiRouter = require('./server/index.js');
app.use('index', apiRouter); //puts specific middleware functions at specified path
app.use(express.static('components'));



app.use(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Invalid Request.");
});

app.listen(3000);
