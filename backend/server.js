import express from "express";
const app = express();
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import cors from "cors";
import cookieParser from "cookie-parser";

app.use(express.json())
app.use(cors())
app.use(cookieParser())


app.use("/backend/auth", authRoutes)
app.use("/backend/users", userRoutes)
app.use("/backend/posts", postRoutes)

app. listen(8800, ()=>{
    console.log("API working")
})