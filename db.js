const mysql = require('mysql');
require('dotenv').config();
const connection = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "test",
    database: "notes"
}) 


module.exports = connection;