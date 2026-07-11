import jwt from "jsonwebtoken"
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
const jwtverify=asyncHandler(async(req,res,next)=>{
    const token=req.cookies.AccessToken;
    if(!token){
        throw new ApiError(404,"token not found");
    }
    else{
        try {
            const decoded=jwt.verify(token,process.env.JWT_SECRET);
            const user=User.findOne({decoded});
            req.user=user;
        } catch (error) {
            return res.clearCookie("hushToken")
        }
    }
    next();
})

export  {jwtverify};