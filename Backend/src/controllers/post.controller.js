import { Post } from "../models/post.model.js";
import { Reaction } from "../models/reaction.model.js";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js"


const CreatePost=asyncHandler(async(req,res)=>{
    let {AnoName,Category,Title,content,expiry}=req.body;
    const {Author}=req.user._id
    if(!AnoName){
        AnoName=username
    }
    const expiresAt=new Date()
    if(expiry=="1h"){
        expiresAt.setHours(expiresAt.getHours() + 1);
    }
    else if(expiry=="12h"){
        expiresAt.setHours(expiresAt.getHours() + 12);
    }
    else if(expiry=="24h"){
        expiresAt.setHours(expiresAt.getHours() + 24);
    }
    else if(expiry=="72h"){
        expiresAt.setHours(expiresAt.getHours() + 72);
    }
    else if(expiry=="never"){
        expiresAt=new Date("2100-01-01")
    }
    else{
        expiresAt.setDate(expiresAt.getDate()+1);
    }
    const post=await Post({
        Title,AnoName,Author,Category,content,expiresAt
    })
    if(!post){
        throw new ApiError(500,"Error Creating Post")
    }
    return res.status(200).json(
        new ApiResponse(200,[],"Post Created")
    )
})
const getReactions=asyncHandler(async(req,res)=>{
    const {postid}=req.query;
    let love=0,laugh=0,relate=0,hug=0,brave=0,mindblow=0;
    const reactions=Reaction.find({postid});
    for(reaction in reactions){
        switch (reaction.type) {
            case "love":
                love++;
                break;
            case "laugh":
                laugh++;
                break;
            case "relate":
                relate++;
                break;
            case "hug":
                hug++;
                break;
            case "brave":
                brave++;
                break;
            case "mindblow":
                mindblow++;
                break;
            default:
                break;
        }
    }
    return res.status(200).json(
        new ApiResponse(200,[love,hug,relate,laugh,brave,mindblow],"Retrieved reactions successfully")
    )
})
const toggleReaction=asyncHandler(async(req,res)=>{
    const {type}=req.body
    const {userid}=req.user._id
    const {postid}=req.query
    const existing=await Reaction.findOne({
        userid,postid,type
    })
    if(existing){
        await Reaction.findByIdAndDelete(existing._id)
    }
    else await Reaction.create({
        userid,postid,type
    })
    return res.status(200).json(
        new ApiResponse(200,[],"Toggled Reaction")
    )
})
const getAllPosts=asyncHandler(async(req,res)=>{
    const posts=await Post.find()
    return res.status(200).json(
        new ApiResponse(200,posts,"Got All posts")
    )
})

const getPostById=asyncHandler(async(req,res)=>{
    const {postid}=req.query
    if(!postid){
        throw new ApiError(400,"Post Id required")
    }
    const post=await Post.findById(postid)
    if(!post){
        throw new ApiError("No Post Found")
    }
    return res.status(200).json(
        new ApiResponse(200,post,"Retreived Post")
    )
})

const DeletePost=asyncHandler(async(req,res)=>{
    const {postid}=req.query
    if(!postid){
        throw new ApiError(400,"Post Id required")
    }
    await Post.findByIdAndDelete(postid)
    return res.status(200).json(
        new ApiResponse(200,[],"Deleted Post")
    )
})

const getMyPosts=asyncHandler(async(req,res)=>{
    const {userid}=req.user._id
    if(!userid){
        throw new ApiError(400,"UnAuthorized Access")
    }
    const posts=Post.find({
        author:userid
    })
    return res.status(200).json(
        new ApiResponse(200,posts,"Retrieved My Posts")
    )
})

export{
    getAllPosts,
    getMyPosts,
    getPostById,
    CreatePost,
    DeletePost,
    toggleReaction,
    getReactions}
