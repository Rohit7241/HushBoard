import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import { Post } from "../models/post.model.js"
import { ApiResponse } from "../utils/ApiResponse.js"
 import { GoogleGenAI } from "@google/genai";
const geminiapi=async(title,content)=>{
   const ai = new GoogleGenAI({
    apiKey:"AIzaSyAVvgKim9IZYOCe7nfU1bjkBZH9AHxQ1ac"
   });
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `Just Answer in YES or NO is this title and content ok to post publicily give a straight NO if it cotains bodyshaming or racism or cussword Title:${title} content:${content}`,
  });
  return response.text;
}
const CreatePost=asyncHandler(async(req,res)=>{
    const {Title,content,posttype,expiry_time}=req.body
    if(!Title||!content||!posttype){
        throw new ApiError(404,"Title or content cannot be empty")
    }
    //check with gemini api
    const consent=await geminiapi(Title,content)
    if(consent=="NO"){
        throw new ApiError(400,"The content you provided doesn't seem fit to post refine your language and words")
    }
    const expiry=new Date(Date.now()+expiry_time*60*60*1000) 
    const post=await Post.create({
        Title,posttype,content,expiresAt:expiry
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
    const post=await Post.findById(id)
    if(!post){
        throw new ApiError(500,"Couldnt find post")
    }
    post.Likes=post.Likes+1
    await post.save({validateBeforeSave:false})
    return res.status(200).json(
        new ApiResponse(200,"","updated")
    )
})
const GetAllPosts=asyncHandler(async(req,res)=>{
    const posts=await Post.find({}).sort({createdAt:-1});
    if(!posts){
        throw new ApiError(500,"Server Error");
    }
    return res.status(200).json(
        new ApiResponse(200,posts,"Fetched All Posts")
    )
})
const GetLikeCount=asyncHandler(async(req,res)=>{
    const {id}=req.body;
    const post=await Post.findById(id);
    const likes=post.Likes;
    return res.status(200).json(
        new ApiResponse(200,likes,"Likes Fetched")
    )
})

export {CreatePost,
        liked,
        GetAllPosts,
        GetLikeCount
        }