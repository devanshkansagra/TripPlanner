import express from "express";
import { login, signup, googleOAuth } from "../controllers/userController";
const userRoutes = express.Router();

userRoutes.post("/login", login);
userRoutes.post("/signup", signup);
userRoutes.get("/google-oauth-callback", googleOAuth);

export default userRoutes;
