import { Request as Req, Response as Res, NextFunction as Next } from "express";

const cors = (_: Req, res: Res, next: Next): void => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
};

export default cors;

