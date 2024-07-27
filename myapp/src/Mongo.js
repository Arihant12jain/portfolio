const express=require('express')
const app=express()
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/short-url');
const urlschema=new mongoose.Schema({
    name:{
        type:String,
    },
    password:{
        type:Number,
    }
})
const User=new mongoose.model('User',urlschema);
module.exports=User;