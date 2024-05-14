const {Sequelize, DataTypes} = require('sequelize');
require('dotenv').config;


const sequelize = new Sequelize(process.env.sqlURL, {
    dialect: 'mysql'
});

const userModel = sequelize.define("user", {
    name:{type: DataTypes.STRING, required: true},
    email:{type: DataTypes.STRING, required: true},
    password:{type: DataTypes.STRING, required: true},
    role:{type: DataTypes.STRING, required: true},  
})

sequelize.sync().then(() => {
    console.log("User Table Created Successfully");
}).catch((error) => {
    console.log("ERROR in Creating: ", error)
})

module.exports = userModel;