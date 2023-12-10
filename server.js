const { readFile } = require('./src/readFile');
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

const parseFileData = (credentialsContent) => {
  const usersCredentials = JSON.parse(credentialsContent);
  setupServer(usersCredentials);
};

const readData = (credentialsFilePath) => {
  return new Promise((res, rej) => {
    readFile(credentialsFilePath, 'utf-8', (error, data) => {
      if (error) {
        rej('');
      }
      res(data);
    });
  });
};

const main = async () => {
  const credentialsFilePath = './users-credentials.json';
  const rawUserData = await readData(credentialsFilePath);
  parseFileData(rawUserData);
};

main();
