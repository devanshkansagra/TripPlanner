import express from 'express';
import { login, signup } from '../controllers/userController';
const userRoutes = express.Router();

userRoutes.post('/login', login);
userRoutes.post('/signup', signup)

export default userRoutes;