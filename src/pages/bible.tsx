import React from "react";
import Link from "next/link";
import axios from "axios";

async function getText(bookAbbrv: string, chapter: number, verse: number) {
  try {
    return await axios.post(`/api/bible/${bookAbbrv}`, {
      chapter: chapter,
      verse: verse,
    });
  } catch (error) {
    throw new Error(error);
  }
}

function Bible() {
  return (
    <div>
      <h1>Sobre</h1>
      <Link href="/">
        <a>Index</a>
      </Link>
      <input placeholder={"Capítulo"}></input>
      <input placeholder={"Versículo"}></input>
    </div>
  );
}

export default Bible;
