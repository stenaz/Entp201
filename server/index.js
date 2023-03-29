const express = require("express");
const mysql = require('mysql');

require('dotenv').config();
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: process.env.DB_PASSWORD
    // database: 'test'

});

connection.connect(function(err){
    if(err){
        console.log("Error while connecting");
        console.log(err);

    }
    else{
        console.log("connection with mysql successful");
    }
});