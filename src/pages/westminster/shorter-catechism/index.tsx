import { NextSeo } from "next-seo";
import React from "react";
import Layout from "../../../components/layout/layout";

function ShorterCatechism() {
  return (
    <>
      <NextSeo title="Catecismo Menor de Westminster" />
      <Layout>
        <div>{"Este é o Catecismo Menor de Westminster"}</div>
      </Layout>
    </>
  );
}

export default ShorterCatechism;
