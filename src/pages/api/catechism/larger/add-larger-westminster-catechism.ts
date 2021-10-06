import { VercelRequest, VercelResponse } from "@vercel/node";
import sendLargerCatechismTodatabase from "../../bible/conversor-to-db/database";
import { catechism } from "../dto/common-catechism.dto";
import { largerWestminsterCatechism } from "./dto/larger-westminster-catechism.dto";

async function AddLargerWestminsterCatechism(
  request: VercelRequest,
  response: VercelResponse
): Promise<boolean> {
  try {
    const largerWestminsterCatechismData: string[] = Object.keys(
      largerWestminsterCatechism
    );
    for (const question of largerWestminsterCatechismData) {
      const catechismQuestion: catechism = largerWestminsterCatechism[question];
      if (typeof catechismQuestion.references == "object") {
        console.log(catechismQuestion);
        await sendLargerCatechismTodatabase(catechismQuestion);
      }
      // await addBook(question);
    }
    response.status(200).json(true);
    return true;
  } catch (error) {
    throw new Error(error);
  }
}

export default AddLargerWestminsterCatechism;
