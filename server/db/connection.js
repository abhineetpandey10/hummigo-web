const mongoose=require('mongoose');

const URI=MONGO_DB_CONNECTION_STRING;

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
