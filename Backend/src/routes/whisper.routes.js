import { Router } from "express";
import multer from "multer";
import { jwtverify } from "../middlewares/jwt.middleware.js";
import { Createwhisper, getWhispers } from "../controllers/whisper.controller.js";
const formparser=multer().none()
router=Router()
router.route("/CreateWhisper").post(formparser,jwtverify,Createwhisper)
router.route("/GetWhispers").post(formparser,jwtverify,getWhispers)