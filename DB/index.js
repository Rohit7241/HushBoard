import mongoose from "mongoose"
const connectDb=async()=>{
    try{
        const connection=mongoose.connect(`${process.env.MongoDBURL}`);
        console.log("Connected to MongoDB server");
    }
    catch(error){
        console.log("error connecting to mongo server",error);
    }
}
export default connectDb;