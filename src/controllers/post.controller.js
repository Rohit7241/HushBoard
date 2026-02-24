import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import { Post } from "../models/post.model.js"
import { ApiResponse } from "../utils/ApiResponse.js"
 import { GoogleGenAI } from "@google/genai";
import { User } from "../models/user.model.js";
const otpgenerate=(email)=>{
    
}
const geminiapi=async(title,content)=>{
   const ai = new GoogleGenAI({
    apiKey:process.env.GEMINI_API
   });
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `Just Answer in YES or NO is this title and content ok to post publicily give a straight NO if it cotains bodyshaming or racism or cussword Title:${title} content:${content}`,
  });
  return response.text;
}
const register=asyncHandler(async(req,res)=>{
    const {email}=req.body;
    if(!email){
        throw new ApiError(404,"Email is Required!");
    }
    const otp=otpgenerate(email)
    const verified=otpverify(otp,email)
    if(!verified){
        throw new ApiError(400,"Otp Not Verified");
    }
    const userid=uuidv4();
        const newToken = jwt.sign(
                {userid, 
                   email},
                process.env.JWT_SECRET,
                );
         res.cookie("hushToken",newToken, {
                httpOnly: true,
                secure: true,
                sameSite: "Strict"
            });
        const user=User.create({userid,email});
        if(!user){
            throw new ApiError(500,"Internal Server Error!")
        }
        return res.status(200).json(
            new ApiResponse(200,user,"User Registered")
        )
})
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
    let expiry=new Date(Date.now()+expiry_time*60*60*1000)
    if(!expiry_time){
        expiry=new Date(Date.now()+48*60*60*1000);
    }
    let user=await User.findOne({userid});
    if(!user){
        throw new ApiError(404,"User ")
    }
    // console.log(user)
    if(user.posts.length>=10){
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
    let user=await User.findOne({userid});
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
    const {postid}=req.body;
    const post=await Post.findById(postid);
    if(!post){
        throw new ApiError(404,"Post not found")
    }
    const likes=post.Likes.length;
    return res.status(200).json(
        new ApiResponse(200,likes,"Likes Fetched")
    )
})
const recoveraccount=asyncHandler(async(req,res)=>{
    const {userid}=res.body;
    if(!userid){
        throw new ApiError(400,"User id is required");
    }
    const user=User.findOne({userid});
    if(!user){
        throw new ApiError(500,"No User Found!!");
    }
    const email=user.email
    const newToken = jwt.sign(
                {userid, 
                   email},
                process.env.JWT_SECRET,
                );
         res.cookie("hushToken",newToken, {
                httpOnly: true,
                secure: true,
                sameSite: "Strict"
            });
})
export {CreatePost,
        liked,
        GetAllPosts,
        GetLikeCount,
        register
        }