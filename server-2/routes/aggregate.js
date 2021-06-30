"use strict";
const express=require("express");
let router=express.Router()
const connectDB = require('../db/connection');
const UserReview=require('../db/review');
const mongoose=require('mongoose');

router.route("/aggregate")
.get((req,res)=>{
    connectDB();
    console.log("Connected to the DB through /aggregate");
    var avgrating=0,totalreviews=0,totaldownloads=0,featured=[];

    UserReview.find({rating:{$gte:1}},{_id:0,rating:1})
    .then(response=>{
        for(var i=0;i<response.length;i++)
        {
            avgrating+=(response[i]).rating;
        }
        avgrating/=response.length;
        avgrating=avgrating.toFixed(1);
    })
    .then(()=>{
        UserReview.find({review:{$ne:""}},{_id:0,review:1,name:1,rating:1,dpurl:1})
        .then(response=>{
            totalreviews=response.length;
            const sortFunc=(a,b)=>(b.review.length-a.review.length);
            response=response.sort(sortFunc);
            //console.log(response);
            featured.push(response[0]);
            featured.push(response[1]);
        })
        .then(()=>{
            UserReview.find({},{_id:1})
            .then(response=>{
                totaldownloads=response.length
            })
            .then(()=>{
                res.json({
                    "avgrating":avgrating,
                    "totalreviews":totalreviews,
                    "totaldownloads":totaldownloads,
                    "featured":featured
                })
            })
            .catch(error=>console.log(error));
        })
        .catch(error=>console.log(error));
    })
    .catch(error=>console.log(error));


})

module.exports=router;