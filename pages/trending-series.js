import { useQuery } from "@apollo/client";
import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";
import QueryResult from "../components/QueryResult";
import SeriesGrid from "../components/SeriesGrid";
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
        <header className="container mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Top Rated Trending TV Shows
          </h2>
        </header>
        <SeriesGrid
          series={data?.trendingTVShows}
          mediaConfig={data?.mediaConfig}
        />
      </QueryResult>
    </Layout>
  );
}

export default TrendingMovies;
