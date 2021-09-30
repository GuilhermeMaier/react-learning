import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

function Home() {
  const router = useRouter();
  return (
    <div>
      <h1 onClick={() => router.push("/time")}>Home</h1>
      <Link href="/about">
        <a>Sobre</a>
      </Link>
      <Link href="/time">
        <a>Tempo</a>
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
