const mongoose=require('mongoose');
const connectDB = require('../db/connection');
const Blog=require('../db/models/blogs');
const User=require('../db/models/user');
const express=require('express');
const blogs = require('../db/models/blogs');

const router=express.Router();

router.route("/view")
.get((req,res)=>{
    email=req.query.email;

    connectDB();
    console.log("Connected to DB through /blogs/view");

    User.find({email:email})
    .then(data=>{
        data=data[0];
        let userPrefArr=data.blogpreferences;
        let str='';
        for(let i=0;i<userPrefArr.length;i++)
            str=str+userPrefArr[i]+' ';
        Blog.find({$text:{$search:str}},{score:{$meta:"textScore"}}).sort({score:{$meta:"textScore"}})
        .then(data=>{
            var prefblogs=[];
            var blogdetails=data;
            for(let i=0;i<data.length;i++)
                prefblogs.push((data[i]).text);
            Blog.find({text:{$nin:prefblogs}})
            .then(data=>{
                for(let i=0;i<data.length;i++)
                    blogdetails.push(data[i]);
                res.send(blogdetails);
            })
            .catch(err=>console.log(err))
        })
        .catch(err=>console.log(err))
    })
    .catch(err=>console.log(err));
})

module.exports=router;