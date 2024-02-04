import dbClient from "./db-client";
<<<<<<<< HEAD:src/lib/request-data.ts
import { RequestData } from "../utils/types";
import { findAll, excludeId } from "../utils/constants";

const requestData: RequestData = async (databaseName, collectionName) => {
========
import { findAll, excludeId } from "../utils/constants";
import { RequestData } from "../utils/types";

const requestData = async ({ databaseName, collectionName }: RequestData) => {
>>>>>>>> 2513c2f (migrated mongodb code to ts):src/lib/mongodb.ts
  let clientInstance;

  try {
    clientInstance = await dbClient.connect();

    const database = clientInstance.db(databaseName);
    const collection = database.collection(collectionName);
    const queryResult = await collection.find(findAll, excludeId).toArray();
    const [data] = queryResult;

    return data;
  } finally {
    if (clientInstance) {
      await clientInstance.close();
    }
  }
};

export default requestData;
