import { IMailOptions } from "../interface/global.interface";
import DotenvConfig from "../config/env.config";
import nodemailer from "nodemailer";

// const sendMailUtil = async ({ to, html, subject, text, from }: IMailOptions) => {
const sendMailUtil = ({
  to,
  html,
  subject,
  text,
  from,
}: IMailOptions): void => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "dipakkumal673@gmail.com",
      pass: "sfceoehbsqvufqvo",
    },
  });

  const mailOptions = {
    from,
    text,
    to,
    html,
    subject,
  };

  transporter.sendMail(mailOptions, (error: any, info) => {
    if (error !== null) {
      console.log(error);
    } else {
      console.log(info);
    }
  });
};

export default sendMailUtil;
