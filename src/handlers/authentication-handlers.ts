import { Request, Response, NextFunction } from 'express';
const { createHmac } = require('node:crypto');

interface Cookies {
  username: string;
}

const splitByEqual = (text: string): string[] => text.split('=');

const parseCookie = (req: Request, _: Response, next: NextFunction) => {
  const rawCookies: string = req.headers.cookie || '';
  const cookiesPairs: string[] = rawCookies.split(';');
  const cookies: string[] = Object.fromEntries(cookiesPairs.map(splitByEqual));
  req.cookies = cookies;
  next();
};

const isValidCookie = (cookies: Cookies): string => cookies.username;

const serveLoginPage = (_: Request, res: Response): void => {
  const path: string = 'login.html';
  const root: string = 'public/pages';
  res.sendFile(path, { root });
  return;
};

const loginUser = (req: Request, res: Response): void => {
  if (!isValidCookie(req.cookies)) {
    return serveLoginPage(req, res);
  }
  res.redirect('/');
};

const serveHomePage = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (!isValidCookie(req.cookies)) {
    return serveLoginPage(req, res);
  }
  next();
};

const checkLoginStatus = (req: Request, res: Response): void => {
  if (!isValidCookie(req.cookies)) {
    res.redirect('/login');
  }
};

const authenticateUser = (req: Request, res: Response): void => {
  const { username, password } = req.body;
  const hash: string = createHmac('md5', password).digest('hex');

  if (req.app.locals.usersCredentials[username] === hash) {
    res.cookie('username', username);
    res.redirect('/');
    return;
  }

  serveLoginPage(req, res);
};

const logoutUser = (_: Request, res: Response): void => {
  res.clearCookie('username');
  res.end();
};

module.exports = {
  parseCookie,
  loginUser,
  checkLoginStatus,
  serveHomePage,
  authenticateUser,
  logoutUser,
};
