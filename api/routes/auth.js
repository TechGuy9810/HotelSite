import express from "express";
import {register, login, logout,verifyUser} from '../controller/auth.js';
const router = express.Router();

router.post("/register",register);
router.post("/login",login);
router.post("/logout",logout);
router.get("/:id/verifyUser/:token",verifyUser);
export default router;