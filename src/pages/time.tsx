import React from "react";
import Link from "next/dist/client/link";
import moment from "moment";

function Time(props) {
  const dynamicDate = moment().format("DD/MM/YYYY HH:mm:ss");
  return (
    <div>
      <h1>Tempo</h1>
      <Link href="/">
        <a>Index</a>
      </Link>
      <div>{dynamicDate} (dinâmico)</div>
      <div>{props.staticDate} (estático)</div>
    </div>
  );
}

export function getStaticProps() {
  const staticDate = moment().format("DD/MM/YYYY HH:mm:ss");
  return {
    props: {
      staticDate,
    },
  };
}

export default Time;
