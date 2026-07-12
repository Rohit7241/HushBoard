import { Router } from "express";
import multer from "multer";
import router from "./post.routes";
import { jwtverify } from "../middlewares/jwt.middleware";
import { Createwhisper, getWhispers } from "../controllers/whisper.controller";
const formparser=multer().none()

router.route("/CreateWhisper").post(formparser,jwtverify,Createwhisper)
router.route("/GetWhispers").post(formparser,jwtverify,getWhispers)