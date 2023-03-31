// Name: Steven Nazaroff
// Email: stn223@lehigh.edu
// Class number: CSE 264
// Assignment number/name: hw5

const express = require("express");
const fs = require("fs");
const app = express();
const {routes} = require('./server/index');

app.use('/users', routes);
// Start app
app.listen(4000, function() {
  console.log('App started on port 4000');
});




// app.use(function (req, res) {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Invalid Request.");
// });

