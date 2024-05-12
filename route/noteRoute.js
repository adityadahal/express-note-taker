const express = require('express');
const noteModel = require('../models/NoteModel');


const noteRouter = express.Router();


noteRouter.get("/", (req, res) => {
    res.json({message: "This is Note Route For ALL Notes!"})
})


noteRouter.post("/save", async (req, res) => {
    const {title, body, user} = req.body;
    try {
        let note = new noteModel({title, body, user});
        await note.save();
        res.send({
            message: "Note Saved Successfully",
            status: 1
        })
    } catch (error) {
        res.send({
            message : error.message,
            status: 0
        })
    }
})

module.exports = noteRouter;