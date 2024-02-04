import dbClient from "./db-client";
import { findAll, excludeId } from "../utils/constants";
import { RequestData } from "../utils/types";

const requestData = async ({ databaseName, collectionName }: RequestData) => {
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
