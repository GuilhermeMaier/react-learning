// import React from "react";
// import Link from "next/dist/client/link";
// import moment from "moment";
// import axios from "axios";

// async function Time(props) {
//   const config = {
//     url: "https://www.maier-dev.com.br/api/time",
//   };

//   const dynamicDataResponse = await axios(config)
//     .then(function (response) {
//       return response.data;
//     })
//     .catch(function (error) {
//       console.log(error);
//     });

//   console.log("Response:", dynamicDataResponse);
//   const dynamicData = dynamicDataResponse.dynamicDate;
//   console.log("Data final:", dynamicData);
//   console.log("Type Data final:", typeof dynamicData);
//   return (
//     <div>
//       <h1>Tempo</h1>
//       <Link href="/">
//         <a>Index</a>
//       </Link>
//       <div>{dynamicData} (dinâmico)</div>
//       <div>{props.staticDate} (estático)</div>
//     </div>
//   );
// }

// export function getStaticProps() {
//   const staticDate = moment().format("DD/MM/YYYY HH:mm:ss");
//   return {
//     props: {
//       staticDate,
//     },
//     revalidate: 60 * 1,
//   };
// }

// export default Time;

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
    revalidate: 60 * 1,
  };
}

export default Time;
