require("dotenv").config()
const express = require("express");
const connect  = require("./configs/db");
const beardController = require("./controller/Beard.controller");
const cors = require("cors");
const app = express();
app.use(cors())
app.use(express.json());

const PORT = process.env.PORT || 4000
app.use("/products",beardController)

app.listen(PORT,async()=>{
    try{
        await connect()
        console.log(PORT)
    }
    catch(err){
        console.log(err)
    }
})