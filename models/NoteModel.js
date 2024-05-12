// Importing Sequelize and DataTypes from sequelize package
// Sequelize is ORM for MySql Database
const {Sequelize, DataTypes} = require('sequelize');
const sequelizeConnection = require('../db');


// Creating Sequelize instance using the MySQL connection from db.js
const sequelize = new Sequelize({
    dialect: 'mysql',  // specifying the dialect of the database
    ...sequelizeConnection  // copying sequalize Connection from db.js
});

const noteModel = sequelize.define("note", {
    title:{type: DataTypes.STRING, required: true},
    body:{type: DataTypes.STRING, required: true},
    user:{type: DataTypes.STRING, required: true},
})

module.exports = noteModel;