const cors = (_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
};

module.exports = cors;
