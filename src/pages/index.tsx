import Link from "next/link";
import React, { useState } from "react";
import ROUTES from "../common/routes.dto.ts";
import "./global.scss";

function Home() {
  return (
    <>
      <div>
        <h1>Símbolos de Fé</h1>
        <Link href={ROUTES.BIBLE}>
          <a>Bíblia</a>
        </Link>
        <Link href={ROUTES.WESTMINSTER_LARGER_CATECHISM}>
          <a>Catecismo Maior de Westminster</a>
        </Link>
        <Link href={ROUTES.WESTMINSTER_SHORTER_CATECHISM}>
          <a>Breve Catecismo de Westminster</a>
        </Link>
        <Contador />
      </div>
    </>
  );
}

function Contador() {
  const [contador, setContador] = useState(1);

  function adicionaContador() {
    setContador(contador + 1);
  }
  return (
    <div>
      <div>{contador}</div>
      <button onClick={adicionaContador}>Adicionar</button>
    </div>
  );
}

export default Home;
