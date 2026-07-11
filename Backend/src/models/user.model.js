import { model, Schema } from "mongoose";
import jwt from 'jsonwebtoken';
const userSchema=new Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    posts:{
      type:[{
      type:Schema.Types.ObjectId,
      ref:"Post"
      }],
      default:[]
    },
    RefreshToken:{
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