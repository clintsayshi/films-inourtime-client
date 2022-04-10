import { useQuery } from "@apollo/client";
import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";
import QueryResult from "../components/QueryResult";
import TVShowGrid from "../components/TVShowGrid";
import { GET_TRENDING_TV } from "../utils.js/queries";

function TrendingMovies() {
  const { loading, error, data } = useQuery(GET_TRENDING_TV, {
    variables: { timeWindow: "day", limit: 50 },
  });

  return (
    <Layout>
      <Head>
        <title>Trending TV Shows RN</title>
        <meta
          name="description"
          content="helping you find something to watch"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <QueryResult loading={loading} error={error} data={data}>
        <header className="container mx-auto p-4 sm:px-0">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            Trending TV Shows
          </h2>
        </header>
        <TVShowGrid
          tvshows={data?.trendingTVShows}
          mediaConfig={data?.mediaConfig}
        />
      </QueryResult>
    </Layout>
  );
}

export default TrendingMovies;
