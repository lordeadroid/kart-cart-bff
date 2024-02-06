import { ApiRequest } from "../utils/types";

const serveHomePage: ApiRequest = (_, res) => {
  res.send("This is the homepage for kart cart bff");
};

export { serveHomePage };
