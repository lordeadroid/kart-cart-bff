const logRequest = (req, _, next) => {
  const [TIME] = new Date().toTimeString().split(' ');
  console.log(`${req.method} ${req.path} @ ${TIME} from ${req.headers.origin}`);
  next();
};

module.exports = { logRequest };
