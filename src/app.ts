import { Express } from "express";
import express from "express";

import logRequest from "./middlewares/logger";
import cors from "./middlewares/cors";
import parseCookie from "./middlewares/cookie-parser";

const setupMiddlewares = (app: Express): void => {
  app.use(logRequest);
  app.use(parseCookie);
  app.use(express.json());
  app.use(cors);
  app.use(express.urlencoded({ extended: true }));
  app.use("/", express.static("public"));
};

const createApp = (): Express => {
  const app: Express = express();

  setupMiddlewares(app);
  return app;
};

export default createApp;
