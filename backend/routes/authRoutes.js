import express from "express"
import {register,login} from "../controller/authController.js"
import { protect } from "../middleware/authMiddleware.js"

const router = express.Router()

router.post("/register",register)
router.post("/login",login)

router.get("/me", protect, async (req, res) => {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
})

export default router