const express=require('express');
const cors=require('cors');
const blogsai=require('./routes/blogsai');
const adduser=require('./routes/adduser');
const viewblogs=require('./routes/viewblogs');
const storiesai=require('./routes/storiesai');
const viewstories=require('./routes/viewstories')
const app=express();
app.use(express.json());
app.use(cors());

app.use("/blogs",blogsai);
app.use("/blogs",viewblogs);
app.use("/stories",storiesai);
app.use("/stories",viewstories);
app.use("/",adduser);

app.listen(process.env.PORT || 3001, ()=>{
    console.log("Node JS Server started"); 
})