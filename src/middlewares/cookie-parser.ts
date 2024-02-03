import { ApiRequest } from "../utils/types";

const splitByEqual = (text: string): string[] => {
  return text.split("=");
};

const parseCookie: ApiRequest = (req, _, next) => {
  const rawCookies: string = req.headers.cookie || "";
  const cookiesPairs: string[] = rawCookies.split(";");
  const cookies: string[] = Object.fromEntries(cookiesPairs.map(splitByEqual));
  req.cookies = cookies;
  next();
};

export default parseCookie;
