"use strict";
const express=require("express");
let router=express.Router()
const connectDB = require('../db/connection');
const {spawn} = require('child_process');
const mongoose=require('mongoose');
const Story = require("../db/models/stories");
const User = require("../db/models/user");

router.route("/write")
.post((req,res)=>{
    var name=req.body.name;
    var email=req.body.email;
    var dpurl=req.body.dpurl;
    var heading=req.body.heading;
    var summary=req.body.summary;
    var text=req.body.text;
    var imglink=req.body.imglink;
    var tags;

    //spawn new child process to call the python script
    const python = spawn('python', ['nlp.py',text]);
    // collect data from script
    python.stdout.on('data', function (data) 
    {
        console.log('Pipe data from python script ...');
        data=data.toString();
        console.log(data);
        data=data.split(':');
        data[0]=(data[0]).substring(3,(data[0]).length-1);
        data[0]=data[0].split(' ');
        tags = data[0];
    });
    // in close event we are sure that stream from child process is closed
    python.on('close', (code) => 
    {
        console.log(`child process close all stdio with code ${code}`);
        
        connectDB();
        console.log("Connected to database through /stories/write");
        var storydata={
            name:name,
            email:email,
            dpurl:dpurl,
            heading:heading,
            summary:summary,
            text:text,
            imglink:imglink,
            tags:tags
        }
        var story=new Story(storydata);

        story.save()
        .then(()=>{
            res.json({
                "tags":tags
            });
        })
        .then(()=>{
            console.log("Story Data saved");
            
        })
        .catch(err=>console.log(err));        
    });
});

router.route("/upvote")
.post((req,res)=>{
    var name=req.body.name;
    var email=req.body.email;
    var dpurl=req.body.dpurl;
    var heading=req.body.heading;
    var summary=req.body.summary;
    var text=req.body.text;
    var tags;

    //spawn new child process to call the python script
    const python = spawn('python', ['nlp.py',text]);
    // collect data from script
    python.stdout.on('data', function (data) 
    {
        console.log('Pipe data from python script ...');
        data=data.toString();
        console.log(data);
        data=data.split(':');
        data[0]=(data[0]).substring(3,(data[0]).length-1);
        data[0]=data[0].split(' ');
        tags = data[0];
    });
    // in close event we are sure that stream from child process is closed
    python.on('close', (code) => 
    {
        console.log(`child process close all stdio with code ${code}`);
        
        connectDB();
        console.log("Connected to database through  /stories/upvote");
        
        User.find({email:email})
        .then(data=>{
            data=data[0];
            let userPrefArr=data.storypreferences;
            let arr=[];
            for(var i=0;i<tags.length;i++)
            {
                let flag=0;
                for(var j=0;j<userPrefArr.length;j++)
                {
                    if(userPrefArr[j]===tags[i])
                    {
                        flag=1;
                        break;
                    }
                }
                if(flag===0) userPrefArr.push(tags[i]);
            }
            User.updateOne({email:email},{storypreferences:userPrefArr})
            .then(()=>{
                console.log("User Preferences Updated");
                res.json({
                    message:"User Preferences Updated"
                });
            })
            .catch(err=>console.log(err));
        })
        .catch(err=>console.log(err))      
    });
});

router.route("/downvote")
.post((req,res)=>{
    var name=req.body.name;
    var email=req.body.email;
    var dpurl=req.body.dpurl;
    var heading=req.body.heading;
    var summary=req.body.summary;
    var text=req.body.text;
    var tags;

    //spawn new child process to call the python script
    const python = spawn('python', ['nlp.py',text]);
    // collect data from script
    python.stdout.on('data', function (data) 
    {
        console.log('Pipe data from python script ...');
        data=data.toString();
        console.log(data);
        data=data.split(':');
        data[0]=(data[0]).substring(3,(data[0]).length-1);
        data[0]=data[0].split(' ');
        tags = data[0];
    });
    // in close event we are sure that stream from child process is closed
    python.on('close', (code) => 
    {
        console.log(`child process close all stdio with code ${code}`);
        
        connectDB();
        console.log("Connected to database through  /stories/downvote");
        
        User.find({email:email})
        .then(data=>{
            data=data[0];
            let userPrefArr=data.storypreferences;
            //console.log("Initial Preferences: "+userPrefArr);
            let deleteIndexes=[];
            for(var i=0;i<tags.length;i++)
            {
                let flag=0;
                for(var j=0;j<userPrefArr.length;j++)
                {
                    if(userPrefArr[j]===tags[i])
                    {
                        deleteIndexes.push(j);
                        break;
                    }
                }
            }
            //console.log("Delete Indexes: "+deleteIndexes);
            while(deleteIndexes.length!==0)
            {
                userPrefArr.splice(deleteIndexes.pop(),1);
            }
            User.updateOne({email:email},{storypreferences:userPrefArr})
            .then(()=>{
                console.log("User Preferences Updated");
                res.json({
                    message:"User Preferences Updated"
                })
            })
            .catch(err=>console.log(err));
        })
        .catch(err=>console.log(err))      
    });
})

module.exports=router;