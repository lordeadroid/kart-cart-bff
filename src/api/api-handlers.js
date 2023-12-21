const getServerSideProps = require("../lib/client");
const readData = require("../readData");

const serveTrending = (_, res) => {
  const path = "./data/trending.json";
  const encoding = "utf-8";
  readData(path, encoding).then((data) => {
    res.send(data);
  });
};

const serveHomePageData = (_, res) => {
  const dbName = "STORE";
  const collectionName = "GALLERY_IMAGES";
  getServerSideProps({ dbName, collectionName }).then((data) => {
    const { galleryImages } = data;
    res.json(galleryImages);
  });
};

const serveProductPage = (req, res) => {
  const dbName = "STORE";
  const collectionName = "GALLERY_IMAGES";
  getServerSideProps({ dbName, collectionName }).then((rawData) => {
    const [data] = rawData;
    res.json(data[productCategory]);
  });
};

const serveCategory = (req, res) => {
  const dbName = "STORE";
  const collectionName = "PRODUCTS";
  const { productCategory } = req.params;
  getServerSideProps({ dbName, collectionName }).then((rawData) => {
    const [data] = rawData;
    res.json(data[productCategory]);
  });
};

module.exports = {
  serveTrending,
  serveHomePageData,
  serveProductPage,
  serveCategory,
};
