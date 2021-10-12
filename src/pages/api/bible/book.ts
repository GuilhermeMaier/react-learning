import { VercelRequest, VercelResponse } from "@vercel/node";
import getVerses from "./database";
import { bible } from "./dto/bible.dto";
import {
  BibleAbbrvKVM,
  BibleRequestBody,
  BIBLE_BOOK_NAME,
  DBVerse,
  JsonBook,
  DBRequestBody,
} from "./dto/common.dto";

async function BibleBook(request: VercelRequest, response: VercelResponse) {
  //: Promise<DBVerse[]>
  const requestBody: BibleRequestBody = request.body;
  const abbrev: string = BibleAbbrvKVM.get(
    BIBLE_BOOK_NAME[requestBody.book]
  ).toLowerCase();
  const { chapterId, verseIdStart, verseIdEnd } = requestBody;
  const DBRequestBody: DBRequestBody = {
    abbrev,
    chapterId,
    verseIdStart,
    verseIdEnd,
  };
  const DBResponse = await getVerses(DBRequestBody);
  response.status(200).json(DBResponse);
  return DBResponse;
  // const DBBook: DBVerse[] = convertJsonToDB(JsonBook);
  // const DBResponse = await addBook(DBBook);
  // response.status(200).json(DBResponse);
  // return DBResponse;
}

export default BibleBook;
