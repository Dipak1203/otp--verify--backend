import { Router } from "express";
import otpController from "../controllers/otp.controller";
const router = Router();

// Define routes
router.post("/send", otpController.sendOtp);
router.post("/verify", otpController.verifyOtp);

export default router;
