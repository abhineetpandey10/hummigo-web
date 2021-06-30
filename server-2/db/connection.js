const mongoose=require('mongoose');

const URI='mongodb+srv://hummigo:hummigo@cluster0.efavu.mongodb.net/reviews?retryWrites=true&w=majority';

const connectDB=async()=>
{
    try
    {
        await mongoose.connect(URI,{
            useUnifiedTopology:true,
            useNewUrlParser:true
        });
        console.log("Database connection established");
    }
    catch(exception)
    {
        console.log(exception);
        mongoose.connection.close();
    }
}

module.exports=connectDB;