const mongoose =require("mongoose")

const beardSchema = new mongoose.Schema({
    img1:{type:String,required:true},
    img2:{type:String,required:false},
    img3:{type:String,required:false},
    img4:{type:String,required:false},
    img5:{type:String,required:false},
    title:{type:String,required:true},
    prcie:{type:Number,reruired:true},
    price1:{type:Number,required:true},
    dicount:{type:Number,required:true},
},{
    versionKey:false,
    timestamps:true
})

const Beard  = mongoose.model("beard",beardSchema)
module.exports = Beard
