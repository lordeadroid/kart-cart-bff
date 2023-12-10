const { createHmac } = require('node:crypto');

const splitByEqual = (text) => text.split('=');

const parseCookie = (req, _, next) => {
  const rawCookies = req.headers.cookie || '';
  const cookiesPairs = rawCookies.split(';');
  const cookies = Object.fromEntries(cookiesPairs.map(splitByEqual));
  req.cookies = cookies;
  next();
};

const isValidCookie = (cookies) => cookies.username;

const serveLoginPage = (_, res) => {
  const path = 'login.html';
  const root = 'public/pages';
  res.sendFile(path, { root });
  return;
};

const loginUser = (req, res) => {
  if (!isValidCookie(req.cookies)) {
    return serveLoginPage(req, res);
  }
  res.redirect('/');
};

const serveHomePage = (req, res, next) => {
  if (!isValidCookie(req.cookies)) {
    return serveLoginPage(req, res);
  }
  next();
};

const serveData = (req, res) => {
  res.send({ one: 1 });
};

const checkLoginStatus = (req, res) => {
  if (!isValidCookie(req.cookies)) {
    res.redirect('/login');
  }
};

const authenticateUser = (req, res) => {
  const { username, password } = req.body;
  const hash = createHmac('md5', password).digest('hex');

  if (req.app.locals.usersCredentials[username] === hash) {
    res.cookie('username', username);
    res.redirect('/');
    return;
  }

  serveLoginPage(req, res);
};

const logoutUser = (_, res) => {
  res.clearCookie('username');
  res.end();
};

const serveTrending = (req, res) => {
  const data = [
    { category: 'men', images: ['1', '2', '3', '4'] },
    { category: 'women', images: ['5', '6', '7', '8'] },
    { category: 'children', images: ['9', '10', '11', '12'] },
  ];
  res.send(data);
};

module.exports = {
  parseCookie,
  loginUser,
  checkLoginStatus,
  serveHomePage,
  authenticateUser,
  logoutUser,
  serveData,
  serveTrending
};
