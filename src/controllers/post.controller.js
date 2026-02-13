import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError, apiError} from "../utils/ApiError.js"
import { Post } from "../models/post.model.js"
import { ApiResponse } from "../utils/ApiResponse.js"

const CreatePost=asyncHandler(async(req,res)=>{
    const {Title,content,posttype}=req.body
    if(!Title||!content||posttype){
        throw new ApiError(404,"Title or content cannot be empty")
    }
    //check with gemini api
    const consent=geminiapi(Title,content)
    if(consent=="NO"){
        throw new ApiError(400,"The content you provided doesn't seem fit to post refine your language and words")
    }
    const expiry=new Date(Date.now()+48*60*60*1000)
    const post=await Post.create({
        Title,posttype,content,expiry
    })
    if(!post){
        throw new ApiError(500,"Could not post! Try Again!")
    }
    return res.status(200).json(
        new ApiResponse(200,post,"created post")
    )
})
const liked=asyncHandler(async(req,res)=>{
    const {id}=req.body
    if(!id){
        throw new ApiError(400,"Id id requires")
    }
    const post=Post.findById(id)
    if(!post){
        throw new ApiError(500,"Couldnt find post")
    }
    post.Likes=post.Likes+1
    post.save({validateBeforeSave:false})
    return res.status(200).json(
        new ApiResponse(200,"","updated")
    )
})

export {CreatePost,
        liked}