import { ApiRequest } from "../utils/types";

const logRequest: ApiRequest = (req, _, next) => {
  const [TIME] = new Date().toTimeString().split(" ");
  console.log(`${req.method} ${req.path} @ ${TIME} from ${req.headers.origin}`);
  next();
};

export default logRequest;
