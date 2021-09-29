import React from "react";
import Link from "next/dist/client/link";
import moment from "moment";

async function Time(props) {
  const dynamicDataResponse = await fetch("https://maier-dev.com.br/api/time");
  console.log("Response:", dynamicDataResponse);
  const dynamicDataJson = await dynamicDataResponse.json();
  console.log("Response em JSON:", dynamicDataJson);
  const dynamicData = dynamicDataJson.dynamicDate;
  console.log("Data final:", dynamicData);
  return (
    <div>
      <h1>Tempo</h1>
      <Link href="/">
        <a>Index</a>
      </Link>
      <div>{dynamicData} (dinâmico)</div>
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
    revalidate: 60 * 1,
  };
}

export default Time;
