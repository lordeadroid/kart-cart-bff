const getServerSideProps = require('../lib/client');
const readData = require('../readData');

const serveTrending = (_, res) => {
  const path = './data/trending.json';
  const encoding = 'utf-8';
  readData(path, encoding).then((data) => {
    res.send(data);
  });
};

const serveHomePageData = (_, res) => {
  const path = './data/homePageData.json';
  const encoding = 'utf-8';
  readData(path, encoding).then((data) => {
    res.send(data);
  });
};

const serveProductPage = (req, res) => {
  const { productId } = req.params;
  const path = './data/products.json';
  const encoding = 'utf-8';
  readData(path, encoding).then((data) => {
    const temp = JSON.parse(data);
    const requiredData = temp[productId];
    res.json(requiredData);
  });
};

const serveCategory = (req, res) => {
  const { productCategory } = req.params;
  getServerSideProps().then((rawData) => {
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
