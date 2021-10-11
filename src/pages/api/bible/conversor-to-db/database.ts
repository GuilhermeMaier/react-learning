import connectDatabase from "../../common/connect";
import { DBVerse } from "../dto/common.dto";

async function addBook(DBBook: DBVerse[]): Promise<boolean> {
  const db = await connectDatabase(process.env.MONGODB_URI);
  const collection = db.collection("bible");
  try {
    for (const currentVerse of DBBook) {
      const currentDocument = await collection.findOneAndUpdate(
        {
          chapterId: currentVerse.chapterId,
          verseId: currentVerse.verseId,
          name: currentVerse.name,
        },
        {
          $set: { verseDescription: currentVerse.verseDescription },
        }
      );
      if (currentDocument.value === null) {
        await collection.insertOne(currentVerse);
      }
    }
    return true;
  } catch (error) {
    throw new Error(error);
  }
}

export default addBook;
