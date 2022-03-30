import { useQuery } from "@apollo/client";
import React from "react";
import Layout from "../components/Layout";
import MovieGrid from "../components/MovieGrid";
import Head from "next/head";
import QueryResult from "../components/QueryResult";
import { GET_TRENDING_MOVIES } from "../utils.js/queries";

function TrendingMovies() {
  const { loading, error, data } = useQuery(GET_TRENDING_MOVIES, {
    variables: { timeWindow: "day", limit: 50 },
  });

  return (
    <Layout>
      <Head>
        <title>Trending Movies RN</title>
        <meta
          name="description"
          content="helping you find something to watch"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <QueryResult loading={loading} error={error} data={data}>
        <header className="container mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Top Rated Trending Movies
          </h2>
        </header>
        <MovieGrid
          movies={data?.trendingMovies}
          mediaConfig={data?.mediaConfig}
        />
      </QueryResult>
    </Layout>
  );
}

export default TrendingMovies;
