const { createApp } = require("./src/app");

const main = () => {
  const app = createApp();
  const PORT = process.env.PORT || 8000;
  app.listen(PORT, () => {
    const TIME: string = new Date().toTimeString();
    console.log("Listening on PORT:", PORT, TIME);
    console.log(`http://localhost:${PORT}\n`);
  });
};

main();
