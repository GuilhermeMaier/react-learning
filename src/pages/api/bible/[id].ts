import { VercelRequest, VercelResponse } from "@vercel/node";
import { GN } from "./dto/bibleBooks.dto";
import {
  BibleAbbrvKVM,
  BIBLE_BOOK_ABBREVIATION,
  BIBLE_BOOK_NAME,
} from "./dto/common.dto";

function Bible(request: VercelRequest, response: VercelResponse) {
  const id: BIBLE_BOOK_NAME = request.query.id;
  const abbrv: BIBLE_BOOK_ABBREVIATION = BibleAbbrvKVM.get(id);

  response.json({
    data: GN.chapters[request.body.chapter - 1][request.body.verse - 1],
  });
}

export default Bible;
