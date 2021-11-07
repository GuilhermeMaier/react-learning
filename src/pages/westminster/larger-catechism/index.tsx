import { NextSeo } from "next-seo";
import React from "react";
import Layout from "../../../components/layout/layout";

function LargerCatechism() {
  return (
    <>
      <NextSeo title="Catecismo Maior de Westminster" />
      <Layout>
        <div>{"Este é o Catecismo Maior de Westminster"}</div>
      </Layout>
    </>
  );
}

export default LargerCatechism;
