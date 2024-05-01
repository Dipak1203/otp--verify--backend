import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(process.cwd(), ".env") });
class DotenvConfig {
  static NODE_ENV = process.env.NODE_ENV;
  static PORT = +process.env.PORT!;

  // Database configuration
  static DATABASE_HOST = process.env.DATABASE_HOST ?? "";
  static DATABASE_PORT = process.env.DATABASE_PORT;
  static DATABASE_USERNAME = process.env.DATABASE_USERNAME ?? "";
  static DATABASE_PASSWORD = process.env.DATABASE_PASSWORD ?? "";
  static DATABASE_NAME = process.env.DATABASE_NAME ?? "";

  //* Email Information
  static MAIL_HOST = process.env.MAIL_HOST;
  static MAIL_AUTH = process.env.MAIL_AUTH;
  static MAIL_PASSWORD = process.env.MAIL_PASSWORD;
  static MAIL_PORT = process.env.MAIL_PORT;
  static MAIL_USERNAME = process.env.MAIL_USERNAME;
  static MAIL_FROM = process.env.MAIL_FROM;
}

export default DotenvConfig;
