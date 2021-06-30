"use strict";
const express=require("express");
let router=express.Router()
const connectDB = require('../db/connection');
const mongoose=require('mongoose');
const User = require("../db/models/user");

router.route("/adduser")
.post((req,res)=>{
    var email=req.body.email;
    connectDB();
    console.log("Connected to DB through /adduser");

    User.find({email:email})
    .then(data=>{
        if(data.length===0)
        {
            let name=req.body.name;
            let dpurl=req.body.dpurl;
            let preferences=[];
            let connections=[];

            let userData={
                name:name,
                email:email,
                dpurl:dpurl,
                preferences:preferences,
                connections:connections
            }

            var user=new User(userData);
            user.save(user)
            .then(()=>{
                console.log("Welcome to Hummigo");
                res.json({
                    message:"Welcome to Hummigo"
                })
            })
            .catch(err=>console.log(err));
        }
        else
        {
            res.json({
                message:"Existing User"
            })
        }
    })
    .catch(err=>console.log(err))
})

module.exports=router