import { Post } from "../models/post.model.js";
import { Whisper } from "../models/whisper.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const Createwhisper=asyncHandler(async(req,res)=>{
    const {content}=req.body
    const postid=req.query
    if(!postid.postid){
        throw new ApiError(400,"Post id required")        
    }
    // console.log(postid.postid)
    const post=await Post.findById(postid.postid)
    if(!postid){
        throw new ApiError(500,"Error Retreiving Post")
    }
    const whisper=await Whisper.create({
        post:postid.postid,
        content
    })
    if(!whisper){
        throw new ApiError(500,"Error Creating Whisper")
    }
    return res.status(200)
    .json(new ApiResponse(200,[],"Created Whisper"))
})

const getWhispers=asyncHandler(async(req,res)=>{
    const {postid}=req.query
    const whispers=await Whisper.find({post:postid})
    return res.status(200).json(
        new ApiResponse(200,whispers,"Retreived the whispers")
    )
})

export{
    Createwhisper,getWhispers
}