import { Router } from "express";
import multer from "multer";
import { CreatePost, GetAllPosts, GetLikeCount, liked } from "../controllers/post.controller.js";
import {jwtverify} from "../middlewares/jwt.middleware.js"
const router=Router();
const formparser=multer().none();
router.route("/like").post(formparser,jwtverify,liked)
router.route("/likecount").post(formparser,jwtverify,GetLikeCount)
router.route("/AllPosts").get(GetAllPosts)
router.route("/CreatePost").post(formparser,jwtverify,CreatePost)

export default router