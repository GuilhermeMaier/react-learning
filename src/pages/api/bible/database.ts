import connectDatabase from "../common/connect";
import { DBBibleRequestBody, DBVerse } from "./dto/common.dto";

async function getVerses(DBRequestBody: DBBibleRequestBody) {
  //: Promise<DBVerse[]>
  const db = await connectDatabase(process.env.MONGODB_URI);
  const collection = db.collection("bible");
  try {
    const { abbrev, chapterId, verseIdStart, verseIdEnd } = DBRequestBody;
    const query = {
      abbrev,
      chapterId,
    };
    if (verseIdStart && !verseIdEnd) {
      query["verseId"] = {};
      query.verseId["$eq"] = verseIdStart;
    }
    if (verseIdStart && verseIdEnd) {
      query["verseId"] = {};
      query.verseId["$gte"] = verseIdStart;
      query.verseId["$lte"] = verseIdEnd;
    }
    return await collection.find(query).toArray();
  } catch (error) {
    throw new Error(error);
  }
}

export default getVerses;
