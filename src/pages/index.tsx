import React, { useState } from "react";
import Link from "next/link";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">
        <a>Sobre</a>
      </Link>
      <Contador />
    </div>
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
