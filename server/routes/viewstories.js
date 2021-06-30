const mongoose=require('mongoose');
const connectDB = require('../db/connection');
const Story=require('../db/models/stories');
const User=require('../db/models/user');
const express=require('express');

const router=express.Router();

router.route("/view")
.get((req,res)=>{
    email=req.query.email;

    connectDB();
    console.log("Connected to DB through /stories/view");

    User.find({email:email})
    .then(data=>{
        data=data[0];
        let userPrefArr=data.storypreferences;
        let str='';
        for(let i=0;i<userPrefArr.length;i++)
            str=str+userPrefArr[i]+' ';
        Story.find({$text:{$search:str}},{score:{$meta:"textScore"}}).sort({score:{$meta:"textScore"}})
        .then(data=>{
            var prefstories=[];
            var storydetails=data;
            for(let i=0;i<data.length;i++)
                prefstories.push((data[i]).text);
            Story.find({text:{$nin:prefstories}})
            .then(data=>{
                for(let i=0;i<data.length;i++)
                    storydetails.push(data[i]);
                res.send(storydetails);
            })
            .catch(err=>console.log(err))
        })
        .catch(err=>console.log(err))
    })
    .catch(err=>console.log(err));
})

module.exports=router;