const clientPromise = require('./mongodb');

const getServerSideProps = async (context) => {
  const client = await clientPromise;
  const db = client.db('STORE');
  const collection = db.collection('PRODUCTS');
  const products = await collection.find({}).toArray();

  return products;
};

module.exports = getServerSideProps;
