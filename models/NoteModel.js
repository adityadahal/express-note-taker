// Importing Sequelize and DataTypes from sequelize package
// Sequelize is ORM for MySql Database
const {Sequelize, DataTypes} = require('sequelize');
const userModel = require('./UserModel');
// const sequelizeConnection = require('../db');
require('dotenv').config();


// Creating Sequelize instance for Passing Mysql URL
sequelize = new Sequelize(process.env.sqlURL,{
    dialect: 'mysql'
});

const noteModel = sequelize.define("note", {
    title:{type: DataTypes.STRING, required: true},
    body:{type: DataTypes.STRING, required: true},
    userId:{type: DataTypes.INTEGER, required: true,},
},{
    tableName: 'note'
})

noteModel.belongsTo(userModel, {foreignKey: 'userId'});



sequelize.sync().then(() => {
    console.log("Note Table Created Successfully");
}).catch((error) => {
    console.error(error);
})


module.exports = noteModel;