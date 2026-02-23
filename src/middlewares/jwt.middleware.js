import jwt from "jsonwebtoken"
// const jwt = require("jsonwebtoken");
import {v4 as uuidv4} from "uuid"
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
const jwtverify=asyncHandler(async(req,res,next)=>{
    const token=req.cookies.hushToken;
    if(!token){
        const userid=uuidv4();
        const {email}=req.body;
        const newToken = jwt.sign(
                {userid, 
                   email},
                process.env.JWT_SECRET,
                );
         res.cookie("hushToken", newToken, {
                httpOnly: true,
                secure: true,
                sameSite: "Strict",
                maxAge: 24 * 60 * 60 * 1000
                
            });
        const user=User.create({userid,email});
        req.user=user;
    }
    else{
        try {
            const decoded=jwt.verify(token,process.env.JWT_SECRET);
            const user=User.findOne({userid});
            req.user=user;
        } catch (error) {
            return res.clearCookie("hushToken")
        }
    }
    next();
})

export  {jwtverify};