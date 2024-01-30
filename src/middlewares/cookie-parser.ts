import { Request as Req, Response as Res, NextFunction as Next } from "express";

const splitByEqual = (text: string): string[] => text.split("=");

const parseCookie = (req: Req, _: Res, next: Next) => {
  const rawCookies: string = req.headers.cookie || "";
  const cookiesPairs: string[] = rawCookies.split(";");
  const cookies: string[] = Object.fromEntries(cookiesPairs.map(splitByEqual));
  req.cookies = cookies;
  next();
};

export default parseCookie;
