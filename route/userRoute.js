const express = require('express');
const userModel = require('../models/UserModel');
const bycrpt = require('bcrypt');

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
    res.send({message: "This is User Route"})
})


userRouter.post("/register", async (req, res) => {
    const{name, email, password, username} = req.body;
    if(!name || !email || !password || !username) {
        res.send({message: "Please fill all the details", status: 404});
        return;
    }
    try {
        console.log("SUCCESSFUL")
        const hashedPassword = await bycrpt.hash(password, 10);
        let user = new userModel({name, email, password: hashedPassword, username});
        await user.save();
        res.status(200).json({message: `User ${username} Registerd Succesfully`, user})
        
    } catch (error) {
        res.status(500).json({message: `User with username ${username} cannot be created: `, error})
    }
})



module.exports = userRouter;