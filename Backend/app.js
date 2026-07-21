import express, { urlencoded } from "express"
import cors from 'cors'
import cookieParser from "cookie-parser"
const app=express();
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use(express.json({
    limit:"16kb"
}))

app.use(express.urlencoded({
    extended:true,
    limit:"16kb"
}))

app.use(express.static("public"))
app.use(cookieParser())

//routes
import postrouter from "./src/routes/post.routes.js"
import userrouter from "./src/routes/user.routes.js"
import whisperrouter from "./src/routes/whisper.routes.js"
app.use("/api/v1/posts",postrouter)
app.use("/api/v1/user",userrouter)
app.use("/api/v1/whisper",whisperrouter)
export {app}