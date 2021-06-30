const mongoose=require('mongoose');

//To be changed

const schema=mongoose.Schema({
    name:String,
    email:String,
    dpurl:String,
    heading:String,
    body:String,
    summary:String,
    tags:Array,
    upvotes:Number,
    downvotes:Number
});

module.exports=mongoose.model('partner',schema);