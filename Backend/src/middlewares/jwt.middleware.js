import jwt from "jsonwebtoken"
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
const jwtverify=asyncHandler(async(req,res,next)=>{
    const token=req.cookies.accessToken;
    if(!token){
        throw new ApiError(404,"token not found");
    }
    else{
        try {
            const decoded=jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
            const user=await User.findOneById(decoded._id)
            .select("-password -refreshToken");
            if(!user){
                throw new ApiError(404,"User not found")
            }
            req.user=user;
        } catch (error) {
             res.clearCookie("accessToken")
             throw new ApiError(400,"Incorrect accessToken")
        }
    }
    next();
})

export  {jwtverify};