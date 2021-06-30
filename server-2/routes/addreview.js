"use strict";
const express=require("express");
let router=express.Router()
const connectDB = require('../db/connection');
const UserReview=require('../db/review');
const mongoose=require('mongoose');

router.route("/reviews")
.post((req,res)=>{
    connectDB();
    UserReview.find({email:req.body.email})
    .then(data=>
        {
            if(data.length===0)
            {
                let review={
                    name:req.body.name,
                    email:req.body.email,
                    dpurl:req.body.dpurl,
                    rated:req.body.rated,
                    reviewed:req.body.reviewed,
                    rating:req.body.rating,
                    review:req.body.review
                }
                
                console.log(review.name);
            
                let userReview=new UserReview(review);
                
                userReview.save()
                .then(()=>{
                    console.log("Review Saved Successfully");
                    res.send("Thank you for downloading our app");
                    mongoose.connection.close();
                })
                .catch(error=>{console.log(error)});
            }
            else
            {
                res.send("Existing User");
            }
        })
    .catch(error=>console.log(error));
})
.get((req,res)=>
    {
        connectDB();
        console.log("Connected to the database through review/");
        let email=req.query.email;
        console.log(email);
        if(email===undefined)
        {
            UserReview.find({review:{$ne:""}})
            .then(data=>{res.json({data:data})})
            .catch(error=>console.log(error))
        }
        else
        {
            UserReview.find({email:email})
            .then(data=>{res.json({data:data})})
            .catch(error=>console.log(error))
        }
    }
)
.put((req,res)=>
    {
        let rated=req.body.rated;
        let reviewed=req.body.reviewed;

        connectDB();
        console.log("Rated"+rated);
        console.log("Reviewed"+reviewed);
        if(rated!==undefined)
        {
            UserReview.updateOne({email:req.body.email},{
                rated:rated,
                rating:req.body.rating
            })
            .then(()=>{res.send("Thank you for rating us")})
            .catch(error=>console.log(error))
        }
        else if(reviewed!==undefined)
        {
            UserReview.updateOne({email:req.body.email},{
                reviewed:reviewed,
                review:req.body.review
            })
            .then(()=>{res.send("Thank you taking out your time to give your feedback")})
            .catch(error=>console.log(error))
        }
    });
module.exports=router;