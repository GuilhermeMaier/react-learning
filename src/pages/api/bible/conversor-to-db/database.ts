import { Db, MongoClient } from "mongodb";
import url from "url";
import { catechism } from "../../catechism/dto/common-catechism.dto";
import connectDatabase from "../../common/connect";
import { DBVerse } from "../dto/common.dto";

async function sendLargerCatechismTodatabase(
  catechismQuestion: catechism
): Promise<boolean> {
  const db = await connectDatabase(process.env.MONGODB_URI);
  const collection = db.collection("larger-westminster-catechism");
  try {
    const { id, question, answer, references } = catechismQuestion;
    const findQuery = { id, question, answer };
    const updateQuery = { references };
    const currentDocument = await collection.findOneAndUpdate(findQuery, {
      $set: updateQuery,
    });
    if (currentDocument.value === null) {
      await collection.insertOne(catechismQuestion);
    }
    return true;
  } catch (error) {
    throw new Error(error);
  }
}

export default sendLargerCatechismTodatabase;
