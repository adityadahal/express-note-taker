// Importing Sequelize and DataTypes from sequelize package
// Sequelize is ORM for MySql Database
const {Sequelize, DataTypes} = require('sequelize');
// const sequelizeConnection = require('../db');
require('dotenv').config();


// Creating Sequelize instance using the MySQL connection from db.js
// const sequelize = new Sequelize({
//     dialect: 'mysql',  // specifying the dialect of the database
//     ...sequelizeConnection  // copying sequalize Connection from db.js
// });


sequelize = new Sequelize(process.env.sqlURL,{
    dialect: 'mysql'
});

const noteModel = sequelize.define("note", {
    title:{type: DataTypes.STRING, required: true},
    body:{type: DataTypes.STRING, required: true},
    user:{type: DataTypes.STRING, required: true},
},{
    tableName: 'note'
})


sequelize.sync().then(() => {
    console.log("Note Table Created Successfully");
}).catch((error) => {
    console.error(error);
})



module.exports = noteModel;