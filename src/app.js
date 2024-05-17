import express from "express"
import cors from "cors"

// from server we would be able to access and set cookies of the user's browserk
import cookieParser from "cookie-parser"

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({ limit: "16kb" }));

app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());


//routes import

import userRouter from './routes/user.routes.js'

//routes declaration
app.use("/api/v1/users", userRouter)



export default app; 