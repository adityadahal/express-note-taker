const express = require('express');
require("dotenv").config();
const cors = require('cors');
const connection = require('./db');
const noteRouter = require('./route/noteRoute');

const app = express();
const port = process.env.PORT

app.use(express.json());

app.use("/note", noteRouter)

app.use(cors({
    origin: '*',
}))


// app.get("/", (req, res)=>{
//     res.json({data: "Hello World!"})
// })

app.listen(port, async() => {
    try {
        await connection;
        console.log("DATABASE IS CONNECTED")
    } catch (error) {
        console.log(error);
    }



    console.log(`listening on port  ${port}`);
},


)