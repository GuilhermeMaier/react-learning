import { Db, MongoClient } from "mongodb";
import url from "url";

let cachedDb: Db = null;

async function connectDatabase(uri: string) {
  if (cachedDb) return cachedDb;
  const client = await MongoClient.connect(uri);
  const databaseName = url.parse(uri).pathname.substr(1);
  const db = client.db(databaseName);
  cachedDb = db;
  return db;
}

export default connectDatabase;
