import { Request as Req, Response as Res } from "express";

const serveHomePage = (_: Req, res: Res) => {
  res.send("This is the homepage for kart cart bff");
};

export { serveHomePage };
