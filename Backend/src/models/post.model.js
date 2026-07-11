import { model, Model, Schema } from "mongoose";

const postSchema=new Schema({
    Title:{
        type:String,
        required:true,
        trim:true
    },
    AnoName:{
        type:"String"
    },
    Author:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    Category:{
        type:String,
        enum:[
            "Programming",
            "Career",
            "College",
            "Relationships",
            "Confession",
            "Random",
        ],
        default:"Random"
    },
    content:{
        type:String,
        trim:true,
        lowercase:true,
        required:true
    },
    Likes:[{
        type:Schema.Types.ObjectId,
        ref:"User"
    }],
    expiresAt:{
        type:Date,
        required:true
    }
},
{timestamps:true})
postSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });
export const Post=model("Post",postSchema)