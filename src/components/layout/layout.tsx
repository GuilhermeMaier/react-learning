import Link from "next/link";
import React from "react";
import ROUTES from "../../common/routes/routes.dto";

function Layout({ children }) {
  return (
    <div>
      <Link href={ROUTES.HOME}>
        <a>Home</a>
      </Link>
      <Link href={ROUTES.BIBLE}>
        <a>Bíblia</a>
      </Link>
      <Link href={ROUTES.WESTMINSTER_LARGER_CATECHISM}>
        <a>Catecismo Maior</a>
      </Link>
      <Link href={ROUTES.WESTMINSTER_SHORTER_CATECHISM}>
        <a>Catecismo Menor</a>
      </Link>
      {children}
    </div>
  );
}

export default Layout;
