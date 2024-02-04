import { MongoClient } from "mongodb";
import "dotenv/config";

if (!process.env.URI) {
  throw new Error("URI is not defined");
}

const uri: string = process.env.URI;
const dbClient: MongoClient = new MongoClient(uri);

export default dbClient;
