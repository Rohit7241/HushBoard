import { Router } from "express";
import multer from "multer";
import { CreatePost, GetAllPosts, GetLikeCount, liked, recoveraccount, registerAccount } from "../controllers/post.controller.js";
import {jwtverify} from "../middlewares/jwt.middleware.js"
const router=Router();
const formparser=multer().none();
router.route("/like").post(formparser,jwtverify,liked)
router.route("/likecount").post(formparser,jwtverify,GetLikeCount)
router.route("/AllPosts").get(GetAllPosts)
router.route("/CreatePost").post(formparser,jwtverify,CreatePost)
router.route("/register").post(formparser,registerAccount)
router.route("/recoverAccount").post(formparser,recoveraccount)
export default router