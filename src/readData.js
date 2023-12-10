const { readFile } = require('fs');

const readData = (path, encoding) => {
  return new Promise((res, rej) => {
    readFile(path, encoding, (error, data) => {
      if (error) {
        return rej(error);
      }
      return res(data);
    });
  });
};

module.exports = readData;
