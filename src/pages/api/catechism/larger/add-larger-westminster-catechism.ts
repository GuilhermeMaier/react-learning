import { VercelRequest, VercelResponse } from "@vercel/node";
import { catechismQuestion } from "../dto/common-catechism.dto";
import sendLargerCatechismTodatabase from "./database";
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
      const catechismQuestion: catechismQuestion =
        largerWestminsterCatechism[question];
      await sendLargerCatechismTodatabase(catechismQuestion);
    }
    response.status(200).json(true);
    return true;
  } catch (error) {
    throw new Error(error);
  }
}

export default AddLargerWestminsterCatechism;
