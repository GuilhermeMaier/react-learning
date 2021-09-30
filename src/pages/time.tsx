import React, { useEffect, useState } from "react";
import Link from "next/dist/client/link";
import moment from "moment";
import axios from "axios";

function Time({ staticDate }) {
  const [dynamicDate, setDynamicDate] = useState<string>(staticDate);

  const fetchTime = async () => {
    const config = {
      url: "/api/time",
    };

    const dynamicDateResponse = await axios(config);
    const dynamicDate = dynamicDateResponse.data.dynamicDate;
    setDynamicDate(dynamicDate);
  };

  useEffect(() => {
    setInterval(() => {
      fetchTime();
    }, 900);
  }, []);

  return (
    <div>
      <h1>Tempo</h1>
      <Link href="/">
        <a>Index</a>
      </Link>
      <div>{dynamicDate} (dinâmico)</div>
      <div>{staticDate} (estático)</div>
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
