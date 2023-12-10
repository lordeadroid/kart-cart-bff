const express = require('express');
const { logRequest } = require('./middlewares/logger');

const {
  loginUser,
  checkLoginStatus,
  parseCookie,
  authenticateUser,
  serveHomePage,
  logoutUser,
} = require('./handlers/authentication-handlers');

const addMiddleware = (app) => {
  app.use(logRequest);
  app.use(parseCookie);
  app.use(express.json());
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

  app.get('/', serveHomePage);
  app.use(express.static('public'));

  return app;
};

module.exports = { createApp };
