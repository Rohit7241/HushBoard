import { Schema } from "mongoose";

const postSchema=new Schema({
    Title:{
        type:String,
        required:true
    },
    posttype:{
        type:String,
    },
    content:{
        type:String,
        trim:true,
        lowercase:true,
        required:true
    },
    Likes:{
        type:Number,
    },
    expiresAt:{
        type:Date,
        required:true
    }
},
{timestamps:true})

postSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export const Post=model("Post",postSchema)