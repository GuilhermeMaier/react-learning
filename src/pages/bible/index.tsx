import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import ROUTES from "../../common/routes/routes.dto.ts";

function Bible() {
  const [searchChapter, setSearchChapter] = useState<string>();
  const [searchVerse, setSearchVerse] = useState<string>();
  const [verse, setVerse] = useState<string>();

  //   const fetchVerse = async (bookAbbrv: string, chapter: number, verse: number) => {
  //     try {
  //       const fetchedVerseResponse =  await axios.post(`/api/bible/${bookAbbrv}`, {
  //         chapter: chapter,
  //         verse: verse,
  //       });
  //       const fetchedVerse = fetchedVerseResponse.data;
  //       setVerse(fetchedVerse);
  //     } catch (error) {
  //       throw new Error(error);
  //     }
  //   }
  // };

  const fetchTime = async () => {
    const config = {
      url: "/api/time",
    };

    const dynamicDateResponse = await axios(config);
    const dynamicDate = dynamicDateResponse.data.dynamicDate;
    setVerse(dynamicDate);
  };

  return (
    <div>
      <h1>Sobre</h1>
      <Link href={ROUTES.HOME}>
        <a>Index</a>
      </Link>
      {/* <input placeholder={"Capítulo"} onChange={setSearchChapter}></input>
      <input placeholder={"Versículo"} onChange={setSearchVerse}></input> */}
      <button onClick={fetchTime}></button>
      <div>{verse}</div>
    </div>
  );
}

export default Bible;
