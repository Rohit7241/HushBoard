import { model, Schema } from "mongoose";

const userSchema=new Schema({
    userid:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    posts:{
      type:[{type:Schema.Types.ObjectId,
      ref:"Post"}],
      default:[]
    }
},{timestamps:true})

export const User=model("User",userSchema)