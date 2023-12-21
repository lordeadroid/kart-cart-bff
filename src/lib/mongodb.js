const { findAll, excludeId } = require("../utils/constants");
const dbClient = require("./db-client");

const requestData = async ({ databaseName, collectionName }) => {
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

module.exports = requestData;
