import connectDatabase from "../common/connect";
import { DBRequestBody, DBVerse } from "./dto/common.dto";

async function getVerses(DBRequestBody: DBRequestBody) {
  //: Promise<DBVerse[]>
  const db = await connectDatabase(process.env.MONGODB_URI);
  const collection = db.collection("bible");
  try {
    const f = {
      abbrev: DBRequestBody.abbrev,
      chapterId: DBRequestBody.chapterId,
      verseId: {
        $gt: DBRequestBody.verseIdStart,
        $lt: DBRequestBody.verseIdEnd,
      },
    };
    console.log(f);
    const currentDocument = await collection.find(f);

    return currentDocument;
  } catch (error) {
    throw new Error(error);
  }
}

export default getVerses;
