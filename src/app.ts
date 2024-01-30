import { Express } from "express";
import * as express from "express";

import logRequest from "./middlewares/logger";
import cors from "./middlewares/cors";

const {
  parseCookie,
  serveHomePage,
} = require("./handlers/authentication-handlers");

const addMiddleware = (app: Express) => {
  app.use(logRequest);
  app.use(parseCookie);
  app.use(express.json());
  app.use(cors);
  app.use(express.urlencoded({ extended: true }));
};

const createApp = () => {
  const app: Express = express();

  addMiddleware(app);
  app.get("/", serveHomePage);

  return app;
};

export default createApp;
