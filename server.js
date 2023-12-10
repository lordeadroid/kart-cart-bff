const readData = require('./src/readData');
const { createApp } = require('./src/app');

const setupServer = (usersCredentials) => {
  const app = createApp(usersCredentials);

  const PORT = 8000;
  app.listen(PORT, () => {
    const TIME = new Date().toTimeString();
    console.log('Listening on PORT:', PORT, TIME);
    console.log(`http://localhost:${PORT}`);
  });
};

const parseData = (data) => {
  const usersCredentials = JSON.parse(data);
  setupServer(usersCredentials);
};

const main = () => {
  const encoding = 'utf-8';
  const credentialsFilePath = './users-credentials.json';
  readData(credentialsFilePath, encoding).then((data) => {
    parseData(data);
  });
};

main();
