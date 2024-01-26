const express = require("express");

const { logRequest } = require("./middlewares/logger");
const {
  loginUser,
  checkLoginStatus,
  parseCookie,
  authenticateUser,
  serveHomePage,
  logoutUser,
} = require("./handlers/authentication-handlers");
const cors = require("./middlewares/cors");
const {
  serveTrending,
  serveHomePageData,
  serveProductPage,
  serveCategory,
} = require("./api/api-handlers");

const addMiddleware = (app) => {
  app.use(logRequest);
  app.use(parseCookie);
  app.use(express.json());
  app.use(cors);
  app.use(express.urlencoded({ extended: true }));
};

const addAuthenticators = (app) => {
  app.get("/login-status", checkLoginStatus);
  app.get("/login", loginUser);
  app.post("/login", authenticateUser);
  app.post("/logout", logoutUser);
};

const createApp = (usersCredentials) => {
  const app = express();
  app.locals.usersCredentials = usersCredentials;

  addMiddleware(app);

  app.get("/", serveHomePage);
  app.get("/trending", serveTrending);
  app.get("/homepagedata", serveHomePageData);
  app.get("/product/:productId", serveProductPage);
  app.get("/category/:productCategory", serveCategory);
  app.get(express.static("public", {}));

  return app;
};

module.exports = { createApp };
