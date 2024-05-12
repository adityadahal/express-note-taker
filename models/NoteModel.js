const sequelize = require('sequelize');

const noteSchema = sequelize.Schema({
    title: {type: String, required: true},
    body: {type: String, required: true},
    user: {type: String, required: true},
})


const noteModel = sequelize.Model("note", noteSchema);

module.exports = noteModel;