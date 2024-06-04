import express, { application } from "express";
import server from "../server.js";
import userRoutes from "./routes/user-route.js";
import authRoutes from "./routes/auth-route.js";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv'


dotenv.config();


const app = express();
app.listen(3000, () => {
  console.log("Server listening on port 3000!");
});
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(express.json())

app.use("/api/user", userRoutes);

app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
