const mongoose=require('mongoose');

const schema=mongoose.Schema({
    name:String,
    email:String,
    dpurl:String,
    blogpreferences:Array,
    storypreferences:Array,
    connections:Array
});

module.exports=mongoose.model('users',schema);