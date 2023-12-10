/* eslint-disable no-console */

import { Request, Response, NextFunction } from 'express';

const logRequest = (req: Request, _: Response, next: NextFunction): void => {
  console.log(req.method, req.path);
  next();
};

module.exports = { logRequest };
