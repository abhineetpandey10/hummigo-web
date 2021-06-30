const express=require('express');
const cors=require('cors');
const addreview=require('./routes/addreview');
const enquire=require('./routes/enquire');
const aggregate=require('./routes/aggregate');

const app=express();
app.use(express.json());
app.use(cors());

app.use("/",addreview);
app.use("/",enquire);
app.use("/",aggregate);
app.listen(process.env.PORT || 3001, ()=>{
    console.log("Node JS Server started"); 
})