import { Request as Req, Response as Res, NextFunction as Next } from "express";

const logRequest = (req: Req, _: Res, next: Next): void => {
  const [TIME] = new Date().toTimeString().split(" ");
  console.log(`${req.method} ${req.path} @ ${TIME} from ${req.headers.origin}`);
  next();
};

export default logRequest;
