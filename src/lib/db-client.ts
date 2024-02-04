import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://kart-cart:UG1C1dO3uNEjexuc@cluster0.k5mxgck.mongodb.net/?retryWrites=true&w=majority";
const dbClient = new MongoClient(uri);

export default dbClient;
