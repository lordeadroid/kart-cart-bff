const clientPromise = require("./mongodb");

const getServerSideProps = async ({ dbName, collectionName }) => {
  const client = await clientPromise;
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  const products = await collection.find({}).toArray();

  return products;
};

module.exports = getServerSideProps;
