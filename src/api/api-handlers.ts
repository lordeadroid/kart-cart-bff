import { ApiRequest } from "../utils/types";
import requestData from "../lib/request-data";

const serveHomePage: ApiRequest = (_, res) => {
  res.send("This is the homepage for kart cart bff");
};

const serveCategory: ApiRequest = (req, res) => {
  const databaseName = "STORE";
  const collectionName = "PRODUCTS";
  const { productCategory } = req.params;

  requestData(databaseName, collectionName).then((data: any) => {
    res.json(data[productCategory]);
  });
};

export { serveHomePage, serveCategory };
