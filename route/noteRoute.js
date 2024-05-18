const express = require('express');
const noteModel = require('../models/NoteModel');
const userModel = require('../models/UserModel');


const noteRouter = express.Router();


noteRouter.get("/", (req, res) => {
    res.json({message: "This is Note Route For ALL Notes!"})
})


noteRouter.post("/save", async (req, res) => {
    const {title, body, userId} = req.body;
    try {
        let note = new noteModel({title, body, userId});
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


noteRouter.get("/all", async (req, res)=>{
  try {
    const notes = await noteModel.findAll({include: userModel});
    res.send({
        message: "SuccessFully send",
        result: notes
    })
  } catch (error) {
    console.log("ERROR: ", error)
  }
})

module.exports = noteRouter;