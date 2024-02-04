import { MongoClient } from "mongodb";
<<<<<<< HEAD
import "dotenv/config";

if (!process.env.URI) {
  throw new Error("URI is not defined");
}

const uri: string = process.env.URI;
const dbClient: MongoClient = new MongoClient(uri);
=======

const uri =
  "mongodb+srv://kart-cart:UG1C1dO3uNEjexuc@cluster0.k5mxgck.mongodb.net/?retryWrites=true&w=majority";
const dbClient = new MongoClient(uri);
>>>>>>> 2513c2f (migrated mongodb code to ts)

export default dbClient;
