/**
 * File: otp.service.ts
 * Description: This file defines a service class for otp-related operations.
 */
import { Otp } from "../entities/otp.entity";
import { DatabaseConfig } from "../config/database.config";
import crypto from "crypto";
class OtpService {
  constructor(
    private readonly otpRepository = DatabaseConfig.getRepository(Otp)
  ) {}

  async sendOtp(email: string) {
    const otp = crypto.randomInt(100000, 999999);
    const expirationTime = new Date();
    expirationTime.setMinutes(expirationTime.getMinutes() + 5);
    
    await this.otpRepository.save({ otp: otp.toString(), email, expiredAt: expirationTime });
    return otp;
  }
  
  async verifyOtp(otp: string, email: string) {
    const otpData = await this.otpRepository.findOne({
      where: {
        otp: otp,
        email: email,
      },
    });

    if (!otpData) {
      throw new Error("Invalid OTP");
    }
    if (otpData.expiredAt < new Date()) {
      throw new Error("OTP Expired");
    }
    return otpData;
  }
}

export default new OtpService;
