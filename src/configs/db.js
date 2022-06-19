const mongoose = require("mongoose")
require("dotenv").config()

const connect = () =>{
    return mongoose.connect(process.env.URL_LINK)
}

module.exports =connect;