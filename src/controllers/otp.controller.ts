import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import OtpService from "../services/otp.service";
import sendMailUtil from "../utils/email.utils";
import DotenvConfig from "../config/env.config";

class OtpVerificationController {
  async sendOtp(req: Request, res: Response) {
    const { email } = req.body;
    try {
      const otp = await OtpService.sendOtp(email);

      // Compose email
      const mailOptions = {
        from: DotenvConfig.MAIL_FROM ?? "dipakkumal673@gmail.com",
        text: `Your OTP is: ${otp}`,
        to: email,
        html: `<p>Your OTP is: <strong>${otp}</strong></p>`,
        subject: "OTP Verification Code",
      };
      // Send email
      try {
        sendMailUtil(mailOptions);
      } catch (error) {
        console.log(error);
      }

      res.status(StatusCodes.OK).json({ message: "OTP sent successfully" });
    } catch (error: any) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: error.message });
    }
  }

  async verifyOtp(req: Request, res: Response) {
    const { email, otp } = req.body;
    try {
      await OtpService.verifyOtp(otp, email);
      res.status(StatusCodes.OK).json({ message: "OTP verified successfully" });
    } catch (error: any) {
      res.status(StatusCodes.UNAUTHORIZED).json({ error: error.message });
    }
  }
}

export default new OtpVerificationController();
