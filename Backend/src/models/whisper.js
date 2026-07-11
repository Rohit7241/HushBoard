import { model,Schema } from "mongoose";

const whisperScheme=new Schema({
    post:{
        type:Schema.Types.ObjectId,
        ref:"Post",
    },
    content:{
        type:String
    }
},{timestamps:true})

export const Whisper=model("Whisper",whisperScheme)