import { NextSeo } from "next-seo";
import React from "react";
import Layout from "../../components/layout/layout";

function Bible() {
  return (
    <>
      <NextSeo title="Bíblia" />
      <Layout>
        <div>Esta é a Bíblia</div>
      </Layout>
    </>
  );
}

export default Bible;
