import React from "react";
import Link from "next/link";
import ROUTES from "../../../../common/routes/routes.dto.ts";

function LargerWestminsterCatechism() {
  return (
    <div>
      <h1>Sobre</h1>
      <Link href={ROUTES.HOME}>
        <a>Index</a>
      </Link>
    </div>
  );
}

export default LargerWestminsterCatechism;
