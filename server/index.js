const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const mysql = require("mysql");

require("dotenv").config();
const port = process.env.Port || 3000; //setting static port value (3,000)
var router = express.Router();
var cors = require("cors");

const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.DB_PASSWORD,
    database: "profile",
});

// router.get('/data', (req, res) =>{
//     const data = {
//         message: "Hello from the server"
//     };
//     res.json(data);
// });
// module.exports = router;

//router for obtaining all user information
app.get("/users", (req, res) =>{
    let sqlquery = "Select * from user";
    db.query(sqlquery, (err, results) =>{
        if(err){
            throw err;
        }
        res.send(results);
    })
});
//localhost:3000/deleteuser/1
//router for deleting user information
app.get("/deleteuser/:ids", (req, res) =>{
    let sqlquery = `Delete From user where id = ${req.params.ids}`;
    let query = db.query(sqlquery, err => {
        if(err){
            throw err;
        }
        res.send("Employee Deleted from table");
    })
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
