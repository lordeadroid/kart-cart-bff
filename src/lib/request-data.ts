import dbClient from "./db-client";
import { RequestData } from "../utils/types";
import { findAll, excludeId } from "../utils/constants";

const requestData: RequestData = async (databaseName, collectionName) => {

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
