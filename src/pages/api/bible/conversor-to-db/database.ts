import { VercelRequest, VercelResponse } from "@vercel/node";
import { Db, MongoClient } from "mongodb";
import url from "url";
import { DBVerse } from "../dto/common.dto";

let cachedDb: Db = null;

async function connectDatabase(uri: string) {
  if (cachedDb) return cachedDb;
  const client = await MongoClient.connect(uri);
  const databaseName = url.parse(uri).pathname.substr(1);
  const db = client.db(databaseName);
  cachedDb = db;
  return db;
}

async function insertBookOnDB(DBBook: DBVerse[]): Promise<boolean> {
  return true;
  // const db = await connectDatabase(process.env.MONGODB_URI);
  // const collection = db.collection("bible");
  // try {
  //   for (const currentVerse of DBBook) {
  //     await collection.insertOne(currentVerse);
  //   }
  //   return true;
  // } catch (error) {
  //   throw new Error(error);
  // }
}

export default insertBookOnDB;
