import { VercelRequest, VercelResponse } from "@vercel/node";
import getCatechism from "../database";

async function LargerCatechismQuestion(
  request: VercelRequest,
  response: VercelResponse
) {
  //: Promise<DBVerse[]>
  const id: number = Number(request.query.id);
  const collection: string = "larger-westminster-catechism";
  const DBResponse = await getCatechism(collection, id);
  response.status(200).json(DBResponse);
  return DBResponse;
}

export default LargerCatechismQuestion;
