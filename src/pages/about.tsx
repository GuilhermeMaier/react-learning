import React from "react";
import Link from "next/link";

function About() {
  return (
    <div>
      <h1>Sobre</h1>
      <Link href="/">
        <a>Index</a>
      </Link>
    </div>
  );
}

export default About;
