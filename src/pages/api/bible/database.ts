import connectDatabase from "../common/connect";
import { DBRequestBody, DBVerse } from "./dto/common.dto";

async function getVerses(DBRequestBody: DBRequestBody) {
  //: Promise<DBVerse[]>
  const db = await connectDatabase(process.env.MONGODB_URI);
  const collection = db.collection("bible");
  try {
    const { abbrev, chapterId, verseIdStart, verseIdEnd } = DBRequestBody;
    const query = {
      abbrev,
      chapterId,
      verseId: {
        $gte: verseIdStart,
      },
    };
    if (verseIdEnd) query.verseId["$lte"] = verseIdEnd;
    return await collection.find(query).toArray();
  } catch (error) {
    throw new Error(error);
  }
}

export default getVerses;
