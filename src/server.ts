const readData = require("./src/readData");
const { createApp } = require("./src/app");

const main = () => {
  const app = createApp();

  const PORT: number = 8000;
  const TIME: string = new Date().toTimeString();

  app.listen(PORT, () => {
    console.log("Listening on PORT:", PORT, TIME);
    console.log(`http://localhost:${PORT}\n`);
  });
};

main();
