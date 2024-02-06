import { ApiRequest } from "../utils/types";

const cors: ApiRequest = (_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
};

export default cors;

