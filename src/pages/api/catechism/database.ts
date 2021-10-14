import connectDatabase from "../common/connect";
import { DBCatechismRequestBody } from "./dto/common-catechism.dto";

async function getCatechism(collectionName: string, id: number) {
  //: Promise<DBVerse[]>
  const db = await connectDatabase(process.env.MONGODB_URI);
  const collection = db.collection(collectionName);
  try {
    return await collection.find({ id }).toArray();
  } catch (error) {
    throw new Error(error);
  }
}

export default getCatechism;
