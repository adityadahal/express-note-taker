const express = require('express');
const userModel = require('../models/UserModel');
const bycrpt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require("crypto")

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
        const hashedPassword = await bycrpt.hash(password, 10);
        let user = new userModel({name, email, password: hashedPassword, username});
        await user.save();
        res.status(200).json({message: `User ${username} Registered Succesfully`, user})
        
    } catch (error) {
        res.status(500).json({message: `User with username ${username} cannot be created: `, error})
    }
})

userRouter.post("/login", async (req, res)=>{
    const{email, password} = req.body;
    try {
        const user = await userModel.findOne({where: {email}});
        if(!user){
            return res.status(401).json({message: "Invalid Email"});
        }
        const validPassword = await bycrpt.compare(password, user.password);
        if(!validPassword){
            return res.status(401).json({message: "Invalid Password"});
        }
        const JWT_SECRET = crypto.randomBytes(64).toString('hex');
        const token = jwt.sign({id: user.id, email: user.email}, JWT_SECRET, {expiresIn: '1d'});
        res.status(201).json({message:"Login Successful", token: token})

    } catch (error) {
        res.status(500).json({message: "Cannot Login"})
    }
})



module.exports = userRouter;