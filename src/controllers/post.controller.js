import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import { Post } from "../models/post.model.js"
import { ApiResponse } from "../utils/ApiResponse.js"
 import { GoogleGenAI } from "@google/genai";
import { User } from "../models/user.model.js";
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
    const {userid}=req.user;
    if(!Title||!content||!posttype){
        throw new ApiError(404,"Title or content cannot be empty")
    }
    if(!userid){
        throw new ApiError(500,"Internal Server error please try after some time")
    }
    //check with gemini api
    const consent=await geminiapi(Title,content)
    if(consent=="NO"){
        throw new ApiError(400,"The content you provided doesn't seem fit to post refine your language and words")
    }
    const expiry=new Date(Date.now()+expiry_time*60*60*1000)
    let user=await User.find(userid);
    if(!user){
        user=await User.create({userid})
    }
    if(user.posts.size()>=10){
        throw new ApiError(400,"You cannot post more than 10 times a Day")
    }
    const post=await Post.create({
        Title,posttype,content,expiresAt:expiry
    })
    
    if(!post){
        throw new ApiError(500,"Could not post! Try Again!")
    }
    user.posts.push(post._id);
    await user.save({validateBeforeSave:false})
    return res.status(200).json(
        new ApiResponse(200,post,"created post")
    )
})
const liked=asyncHandler(async(req,res)=>{
    const {postid}=req.body
    const {userid}=req.user;
    if(!postid){
        throw new ApiError(400,"Id id requires")
    }
    let user=await User.find(userid);
    if(!user){
        user=await User.create({userid})
    }
    const post=await Post.findById(postid)
    if(!post){
        throw new ApiError(500,"Couldnt find post")
    }
    post.Likes.push(user._id);
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
    const likes=post.Likes.size();
    return res.status(200).json(
        new ApiResponse(200,likes,"Likes Fetched")
    )
})
export {CreatePost,
        liked,
        GetAllPosts,
        GetLikeCount
        }