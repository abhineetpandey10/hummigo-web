"use strict";
const express=require("express");
let router=express.Router()
const connectDB = require('../db/connection');
const UserReview=require('../db/review');
const mongoose=require('mongoose');

router.route("/enquire")
.post((req,res)=>{
    connectDB();
    UserReview.find({email:req.body.email})
    .then((data)=>{
        data=data[0];
        let rated=data.rated;
        let reviewed=data.reviewed;
        console.log("Rated: "+rated);
        console.log("Reviewed: "+reviewed);
        if(rated==='true' && reviewed==='true')
        {
            res.send("rated and reviewed");
        }
        else if(rated==='true' && reviewed==='false')
        {
            res.send("rated");
        }
        else if(rated==='false' && reviewed==='true')
        {
            res.send("reviewed");
        }
    })
    mongoose.connection.close();
});

module.exports=router;