const mongoose= require('mongoose')
const schema ={
    imageURL:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    }
}

const ProductSchema =new mongoose.Schema(schema);
module.exports =mongoose.model('User',ProductSchema);