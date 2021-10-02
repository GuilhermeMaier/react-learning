import { VercelRequest, VercelResponse } from "@vercel/node";
import { Db, MongoClient } from "mongodb";
import url from "url";
import { LV } from "./dto/bibleBooks.dto";

let cachedDb: Db = null;

async function connectDatabase(uri: string) {
  if (cachedDb) return cachedDb;
  const client = await MongoClient.connect(uri);
  const databaseName = url.parse(uri).pathname.substr(1);
  const db = client.db(databaseName);
  cachedDb = db;
  return db;
}

async function JSONtoDB(request: VercelRequest, response: VercelResponse) {
  const db = await connectDatabase(process.env.MONGODB_URI);
  const collection = db.collection("bible");
  try {
    const bibleJSON = LV.chapters.map((ignore, chapterIndex) => {
      const bibleChapters = LV.chapters[chapterIndex].map(
        (verseDescription, verseIndex) => {
          const bibleVerses = {
            name: LV.name,
            abbrev: LV.abbrev,
            chapterId: chapterIndex + 1,
            verseId: verseIndex + 1,
            verseDescription,
          };
          return bibleVerses;
        }
      );
      return bibleChapters;
    });
    const reduced = [].concat.apply([], bibleJSON);
    for (const current of reduced) {
      await collection.insertOne(current);
    }
    return response.status(200).json({ message: "OK" });
  } catch (error) {
    return response.status(400).json({ message: error });
  }
}

export default JSONtoDB;
