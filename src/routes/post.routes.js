import { Router } from "express";
import multer from "multer";
import { CreatePost, GetAllPosts, GetLikeCount, liked } from "../controllers/post.controller.js";
const router=Router();
const formparser=multer().none();
router.route("/like").post(liked)
router.route("/likecount").post(GetLikeCount)
router.route("/AllPosts").get(GetAllPosts)
router.route("/CreatePost").post(formparser,CreatePost)

export default router