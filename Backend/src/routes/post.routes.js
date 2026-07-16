import { Router } from "express";
import multer from "multer";
import { CreatePost, DeletePost, getAllPosts, getMyPosts, getPostById, getReactions, toggleReaction } from "../controllers/post.controller.js";
import {jwtverify} from "../middlewares/jwt.middleware.js"
const router=Router();
const formparser=multer().none();
router.route("/toggleReaction").post(formparser,jwtverify,toggleReaction)
router.route("/Reactions").get(formparser,jwtverify,getReactions)
router.route("/AllPosts").get(getAllPosts)
router.route("/CreatePost").post(formparser,jwtverify,CreatePost)
router.route("/getMyPosts").get(formparser,jwtverify,getMyPosts)
router.route("DeletePost").post(formparser,jwtverify,DeletePost)
router.route("/getPost").get(formparser,jwtverify,getPostById)
export default router