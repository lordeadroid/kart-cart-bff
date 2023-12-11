const express = require('express');

const { logRequest } = require('./middlewares/logger');
const {
  loginUser,
  checkLoginStatus,
  parseCookie,
  authenticateUser,
  serveHomePage,
  logoutUser,
  serveData,
  serveTrending,
} = require('./handlers/authentication-handlers');
const cors = require('./middlewares/cors');

const addMiddleware = (app) => {
  app.use(logRequest);
  app.use(parseCookie);
  app.use(express.json());
  app.use(cors);
  app.use(express.urlencoded({ extended: true }));
};

const addAuthenticators = (app) => {
  app.get('/login-status', checkLoginStatus);
  app.get('/login', loginUser);
  app.post('/login', authenticateUser);
  app.post('/logout', logoutUser);
};

const createApp = (usersCredentials) => {
  const app = express();
  app.locals.usersCredentials = usersCredentials;

  addMiddleware(app);

  app.get('/', serveHomePage);
  app.get('/data', serveData);
  app.get('/trending', serveTrending);

  return app;
};

module.exports = { createApp };
