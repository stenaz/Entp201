const express = require("express");
const fs = require("fs");
const app = express();
const server = require('./server/index');


app.use(server.routes);







const port = 4000; //setting static port value (3,000)

// Start app
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});


// const express = require("express");
// const path = require("path");
// const fs = require("fs");
// const app = express();
// const mysql = require("mysql");

// require("dotenv").config();
// const port = process.env.Port || 3000; //setting static port value (3,000)
// var router = express.Router();
// var cors = require("cors");

// const db = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: process.env.DB_PASSWORD,
//   database: "profile",
// });

// //router for obtaining all user information
// app.get("/users", (req, res) => {
//   let sqlquery = "Select * from user";
//   db.query(sqlquery, (err, results) => {
//     if (err) {
//       throw err;
//     }
//     res.send(results);
//   });
// });

// //localhost:3000/deleteuser/1
// //router for deleting user information
// app.get("/deleteuser/:ids", (req, res) => {
//   let sqlquery = `Delete From user where id = ${req.params.ids}`;
//   let query = db.query(sqlquery, (err) => {
//     if (err) {
//       throw err;
//     }
//     res.send("Employee Deleted from table");
//   });
// });







// app.use(function (req, res) {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Invalid Request.");
// });

