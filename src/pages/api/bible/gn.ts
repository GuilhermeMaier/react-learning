import { VercelRequest, VercelResponse } from "@vercel/node";
import { GN } from "./dto/bibleBooks.dto";

function Genesis(request: VercelRequest, response: VercelResponse) {
  response.json({
    data: GN.chapters[request.body.chapter - 1][request.body.verse - 1],
  });
}

export default Genesis;
