const sequelize = require('sequelize');

// const noteSchema = sequelize.Schema({
//     title: {type: String, required: true},
//     body: {type: String, required: true},
//     user: {type: String, required: true},
// })


// const noteModel = sequelize.Model("note", noteSchema);

const noteModel = sequelize.define("note", {
    title:{type: sequelize.DataTypes.STRING, required: true},
    body:{type: sequelize.DataTypes.STRING, required: true},
    user:{type: sequelize.DataTypes.STRING, required: true},
})

module.exports = noteModel;