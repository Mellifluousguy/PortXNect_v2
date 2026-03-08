import express from "express"
import {register,login, forgotPassword, resetPassword} from "../controller/authController.js"
import User from "../models/User.js"
import { protect } from "../middleware/authMiddleware.js"

const router = express.Router()

router.post("/register",register)
router.post("/login",login)
router.post("/forgot-password", forgotPassword)
router.post("/reset-password/:token", resetPassword)

router.get("/me", protect, async (req, res) => {
    const user = await User.findById(req.user).select("-password");
    console.log(user)
    res.json(user);
})

export default router