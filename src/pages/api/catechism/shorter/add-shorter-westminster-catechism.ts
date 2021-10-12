import { VercelRequest, VercelResponse } from "@vercel/node";
import { catechismQuestion } from "../dto/common-catechism.dto";
import sendShorterCatechismTodatabase from "./database";
import { shorterWestminsterCatechism } from "./dto/shorter-westminster-catechism.dto";

async function AddShorterWestminsterCatechism(
  request: VercelRequest,
  response: VercelResponse
): Promise<boolean> {
  try {
    const shorterWestminsterCatechismData: string[] = Object.keys(
      shorterWestminsterCatechism
    );
    for (const question of shorterWestminsterCatechismData) {
      const catechismQuestion: catechismQuestion =
        shorterWestminsterCatechism[question];
      if (typeof catechismQuestion.references == "object") {
        await sendShorterCatechismTodatabase(catechismQuestion);
      }
    }
    response.status(200).json(true);
    return true;
  } catch (error) {
    throw new Error(error);
  }
}

export default AddShorterWestminsterCatechism;
