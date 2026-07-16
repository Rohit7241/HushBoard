import { Router } from "express";
import multer from "multer";
import { login, Register } from "../controllers/user.controller.js";

const formparser=multer().none();

const router=Router()
router.route("/login").post(formparser,login)
router.route("/register").post(formparser,Register)

export default router