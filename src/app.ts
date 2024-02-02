import { Express } from "express";
import * as express from "express";

import logRequest from "./middlewares/logger";
import cors from "./middlewares/cors";
import parseCookie from "./middlewares/cookie-parser";

const addMiddleware = (app: Express) => {
  app.use(logRequest);
  app.use(parseCookie);
  app.use(express.json());
  app.use(cors);
  app.use(express.urlencoded({ extended: true }));
  app.use("/", express.static("public"));
};

const createApp = () => {
  const app: Express = express();

  addMiddleware(app);

  return app;
};

export default createApp;
