import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import bcrypt from 'bcrypt'
import {ApiResponse} from "../utils/ApiResponse.js"

const login=asyncHandler(async(req,res)=>{
    const {username,password}=req.body;
    const user=await User.findOne({username});
    if(!user){
        throw new ApiError(404,"User Does not exists");
    }
    if(!(await bcrypt.compare(password,user.password))){
        throw new ApiError(400,"Password incorrect!")
    }
    const accessToken=user.generateAccessToken();
    const refreshToken=user.generateRefreshToken();
    user.RefreshToken=refreshToken;
    await user.save({validateBeforeSave:false})
    return res
    .cookie("accessToken",accessToken,{
        httpOnly:true,
        secure:process.env.NODE_ENV==="production",
        sameSite:"strict"
    })
    .cookie("refreshToken",refreshToken,{
        httpOnly:true,
        secure:process.env.NODE_ENV==="production",
        sameSite:"strict"
    })
    .status(200)
    .json(new ApiResponse(200,[],"Login Successful"))
})
const Register=asyncHandler(async(req,res)=>{
    let {username,password,email}=req.body;
    email=email.toLowerCase().trim();
    username=username.trim();
    if(!email||!username){
        throw new ApiError(400,"email and username is required")
    }
    const check=await User.findOne({
    $or:[{username},{email}]
    });
    if(check){
        throw new ApiError(400,"Username or email already taken");
    }
    const saltRounds=10;
    const hashed=await bcrypt.hash(password,saltRounds)
    const user=await User.create({
        username,email,password:hashed
    })
    if(!user){
        throw new ApiError(500,"Error creating User")
    }
    return res.status(200)
    .json(
        new ApiResponse(202,[],"User Created")
    )
})

export{
    Register,
    login
}

