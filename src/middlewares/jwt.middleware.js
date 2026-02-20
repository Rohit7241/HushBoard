import jwt from "jsonwebtoken"
// const jwt = require("jsonwebtoken");
import {v4 as uuidv4} from "uuid"
import { asyncHandler } from "../utils/asyncHandler.js";
// const { v4: uuidv4 } = require("uuid");
const jwtverify=asyncHandler(async(req,res,next)=>{
    const token=req.cookies.hushToken;
    if(!token){
        const userid=uuidv4();
        const newToken = jwt.sign(
                { userid },
                process.env.JWT_SECRET,
                { expiresIn: "24h" }
                );
         res.cookie("hushToken", newToken, {
                httpOnly: true,
                secure: true,
                sameSite: "Strict",
                maxAge: 24 * 60 * 60 * 1000
            });
        req.user=userid;
    }
    else{
        try {
            const decoded=jwt.verify(token,process.env.JWT_SECRET);
            req.user=decoded;
        } catch (error) {
            return res.clearCookie("hushToken")
        }
    }
    next();
})

export  {jwtverify};