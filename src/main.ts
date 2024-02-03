import { Express } from "express";

import createApp from "./app";
import { defaultPortNumber } from "./utils/constants";

const main = (): void => {
  const app: Express = createApp();

  const PORT: number = parseInt(process.env.PORT ?? defaultPortNumber);
  const TIME: string = new Date().toTimeString();

  app.listen(PORT, () => {
    console.log("Listening on PORT:", PORT, TIME);
    console.log(`http://localhost:${PORT}\n`);
  });
};

main();
