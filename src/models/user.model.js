import { model, Schema } from "mongoose";

const userSchema=new Schema({
    userid:{
        type:String,
        required:true
    },
    posts:[{
      type:Schema.Types.ObjectId,
      ref:"Post"
    }]
},{timestamps:true})

export const User=model("User",userSchema)