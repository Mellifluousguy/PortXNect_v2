import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    const verificationToken = crypto.randomBytes(20).toString("hex")
    const hashedToken = crypto
      .createHash("sha256")
      .update(verificationToken)
      .digest("hex")
    user.verificationToken = hashedToken
    user.verificationExpire = Date.now() + 24 * 60 * 60 * 1000 // 24 hours

    await user.save()


    const userData = {
      id: user._id,
      username: user.username,
      email: user.email
    }

    res.status(201).json({ message: "User registered successfully. Please check your email and verify email.", user: userData, verificationToken });

  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: "Email or Username already in use" });
    }
    console.error(error);
    res.status(500).json({ message: error.message });
  }
}


export const login = async (req, res) => {

  try {

    const { email, password } = req.body

    const user = await User.findOne({ email })
    const userData = {
      id: user._id,
      username: user.username,
      email: user.email
    }

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" })
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    )
    if (!user.isVerified) {
      return res.status(403).json({
        message: "Please verify your email first"
      })
    }
    res.status(200).json({ message: "Login successful", token, user: userData })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: err.message })
  }

}

export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body

    const user = await User.findOne({ email })

    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    // used for generating randm token
    const resetToken = crypto.randomBytes(20).toString("hex")

    // hashing it before saving to the database for security purposes
    const hashedToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex")

    user.resetPasswordToken = hashedToken
    user.resetPasswordExpire = Date.now() + 10 * 60 * 1000 // 10 minutes

    await user.save()

    // For now tokedn is jsut sent in response for verification
    res.status(200).json({
      message: "Password reset token generated",
      resetToken
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}

export const resetPassword = async (req, res) => {
  try {
    const { token } = req.params
    const { password } = req.body

    const hashedToken = crypto
      .createHash("sha256")
      .update(token)
      .digest("hex")

    const user = await User.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpire: { $gt: Date.now() }
    })

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired token" })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    user.password = hashedPassword
    user.resetPasswordToken = undefined
    user.resetPasswordExpire = undefined

    await user.save()

    res.status(200).json({ message: "Password reset successful" })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}

export const verifyEmail = async (req, res) => {
  try {
    const { token } = req.params

    const hashedToken = crypto
      .createHash("sha256")
      .update(token)
      .digest("hex")

    const user = await User.findOne({
      verificationToken: hashedToken,
      verificationExpire: { $gt: Date.now() }
    })

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired token" })
    }

    user.isVerified = true
    user.verificationToken = undefined
    user.verificationExpire = undefined

    await user.save()

    res.status(200).json({ message: "Email verified successfully" })

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const resendVerification = async (req, res) => {
  try {
    const { email } = req.body

    const user = await User.findOne({ email })

    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    if (user.isVerified) {
      return res.status(400).json({ message: "User already verified" })
    }

    const verificationToken = crypto.randomBytes(20).toString("hex")

    const hashedToken = crypto
      .createHash("sha256")
      .update(verificationToken)
      .digest("hex")

    user.verificationToken = hashedToken
    user.verificationExpire = Date.now() + 24 * 60 * 60 * 1000

    await user.save()

    res.status(200).json({
      message: "Verification link regenerated",
      verificationToken
    })

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}