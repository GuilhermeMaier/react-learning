import { VercelRequest, VercelResponse } from "@vercel/node";
import { bible } from "../dto/bible.dto";
import { DBVerse, JsonBook } from "../dto/common.dto";
import { BibleAbbrvKVM, BIBLE_BOOK_NAME } from "../dto/common.dto";
import addBook from "./database";

function reduceArray(arrayOfArrays: DBVerse[][]): [] {
  return [].concat.apply([], arrayOfArrays);
}

function convertJsonToDB(book: JsonBook): DBVerse[] {
  const bibleJSON = book.chapters.map((ignore, chapterIndex) => {
    const bibleChapters = book.chapters[chapterIndex].map(
      (verseDescription, verseIndex) => {
        const bibleVerses = {
          name: book.name,
          abbrev: book.abbrev,
          chapterId: chapterIndex + 1,
          verseId: verseIndex + 1,
          verseDescription,
        };
        return bibleVerses;
      }
    );
    return bibleChapters;
  });
  const reduced = reduceArray(bibleJSON);
  return reduced;
}

async function Bible(
  request: VercelRequest,
  response: VercelResponse
): Promise<boolean> {
  const id: string = request.query.id.toString();
  const abbrev: string = BibleAbbrvKVM.get(BIBLE_BOOK_NAME[id]);
  const JsonBook: JsonBook = bible[abbrev];
  const DBBook: DBVerse[] = convertJsonToDB(JsonBook);
  const DBResponse = await addBook(DBBook);
  response.status(200).json(DBResponse);
  return DBResponse;
}

export default Bible;
