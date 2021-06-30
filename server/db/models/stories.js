const mongoose=require('mongoose');

const schema=mongoose.Schema({
    name:String,
    email:String,
    dpurl:String,
    heading:String,
    imglink:String,
    text:String,
    summary:String,
    tags:Array,
    upvotes:Number,
    downvotes:Number
});

module.exports=mongoose.model('stories',schema);