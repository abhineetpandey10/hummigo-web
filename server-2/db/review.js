const mongoose=require('mongoose');

const schema=mongoose.Schema({
    name:String,
    email:String,
    dpurl:String,
    rated:String,
    reviewed:String,
    rating:Number,
    review:String
});

module.exports=mongoose.model('details',schema);