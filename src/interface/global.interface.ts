import { Router } from "express";

export interface Route {
  path: string;
  route: Router;
}

export interface IMailOptions {
  to: string
  subject: string
  text: string
  from: string
  html?: string
}
