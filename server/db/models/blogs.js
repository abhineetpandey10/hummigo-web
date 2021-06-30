const mongoose=require('mongoose');

const schema=mongoose.Schema({
    name:String,
    email:String,
    dpurl:String,
    imglink:String,
    heading:String,
    text:String,
    summary:String,
    tags:Array,
    upvotes:Number,
    downvotes:Number
});

module.exports=mongoose.model('blogs',schema);