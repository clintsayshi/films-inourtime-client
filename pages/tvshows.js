import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";

function TVShow() {
  return (
    <Layout>
      <Head>
        <title>TV Shows | Watch Suggestions</title>
        <meta
          name="description"
          content="helping you find something to watch"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section></section>
    </Layout>
  );
}

export default TVShow;
