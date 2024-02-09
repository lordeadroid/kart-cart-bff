import { Express } from "express";
import express from "express";

import logRequest from "./middlewares/logger";
import cors from "./middlewares/cors";
import parseCookie from "./middlewares/cookie-parser";
import { serveCategory } from "./api/api-handlers";

const setupMiddlewares = (app: Express): void => {
  app.use(logRequest);
  app.use(parseCookie);
  app.use(express.json());
  app.use(cors);
  app.use(express.urlencoded({ extended: true }));
  app.use("/", express.static("public"));
};

const setupEndPoint = (app: Express): void => {
  app.get("/category/:productCategory", serveCategory);
};

const createApp = (): Express => {
  const app: Express = express();

  setupMiddlewares(app);
  setupEndPoint(app);
  return app;
};

export default createApp;
