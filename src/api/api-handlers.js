const requestData = require("../lib/mongodb");
const readData = require("../readData");

const serveTrending = (_, res) => {
  const path = "./data/trending.json";
  const encoding = "utf-8";
  readData(path, encoding).then((data) => {
    res.send(data);
  });
};

const serveHomePageData = (_, res) => {
  const databaseName = "STORE";
  const collectionName = "GALLERY_IMAGES";
  requestData({ databaseName, collectionName }).then((data) => {
    const { galleryImages } = data;
    res.json(galleryImages);
  });
};

const serveProductPage = (_, res) => {
  res.send("NOT FOUND");
};

const serveCategory = (req, res) => {
  const databaseName = "STORE";
  const collectionName = "PRODUCTS";
  const { productCategory } = req.params;
  requestData({ databaseName, collectionName }).then((data) => {
    res.json(data[productCategory]);
  });
};

module.exports = {
  serveTrending,
  serveHomePageData,
  serveProductPage,
  serveCategory,
};
