const cors = (req, res, next) => {
  const origin = req.headers.origin;
  const allowedOrigins = [
    'http://localhost:3000',
    'https://kart-cart.vercel.app/',
    'https://kart-cart.onrender.com/',
  ];

  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  next();
};

module.exports = cors;
