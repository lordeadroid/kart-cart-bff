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

module.exports = { serveTrending, serveHomePageData };
