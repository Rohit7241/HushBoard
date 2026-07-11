import { model, Schema } from "mongoose";
import jwt from 'jsonwebtoken';
const userSchema=new Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        minlength:8,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    refreshToken:{
        type:String
    }
},{timestamps:true})

userSchema.methods.generateAccessToken=function(){
    return jwt.sign({
        _id:this._id,
        username:this.username
    },
 process.env.ACCESS_TOKEN_SECRET
 ,{expiresIn:"1h"}
);
};
userSchema.methods.generateRefreshToken=function(){
    return jwt.sign(
        {
            _id:this._id,username:this.username
        },
        process.env.REFRESH_TOKEN_SECRET,
        {expiresIn:"7d"}
    );
};

export const User=model("User",userSchema)