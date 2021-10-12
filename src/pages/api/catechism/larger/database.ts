import connectDatabase from "../../common/connect";
import { catechismQuestion } from "../dto/common-catechism.dto";

async function sendLargerCatechismTodatabase(
  catechismQuestion: catechismQuestion
): Promise<boolean> {
  const db = await connectDatabase(process.env.MONGODB_URI);
  const collection = db.collection("larger-westminster-catechism");
  try {
    const { id, question, answer, references } = catechismQuestion;
    const findQuery = { id, question, answer };
    const updateQuery = { references };
    let counter = 0;
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
