import { VercelRequest, VercelResponse } from "@vercel/node";
import { bible } from "../dto/bible.dto";
import { DBVerse, JsonBook } from "../dto/common.dto";
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

async function Auto(
  request: VercelRequest,
  response: VercelResponse
): Promise<boolean> {
  try {
    const allBibleAbbbrev = Object.keys(bible);
    for (const abbrev of allBibleAbbbrev) {
      const JsonBook: JsonBook = bible[abbrev];
      const DBBook: DBVerse[] = convertJsonToDB(JsonBook);
      await addBook(DBBook);
    }
    response.status(200).json(true);
    return true;
  } catch (error) {
    throw new Error(error);
  }
}

export default Auto;
