import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Layout from "../components/Layout";
import MovieGrid from "../components/MovieGrid";
import QueryResult from "../components/QueryResult";
import { GET_MOVIES_BY_GENRE } from "../utils.js/queries";

function Genre({ location }) {
  const [year, setYear] = useState(new Date().getFullYear());

  const router = useRouter();
  const genreId = router.query;
  const mediaType = router.query.mediaType;
  //console.log(genreId);

  const { loading, error, data } = useQuery(
    mediaType == "movie" ? GET_MOVIES_BY_GENRE : GET_TV_BY_GENRE,
    {
      variables: {
        genreId: router.query.genreId,
        year: year,
      },
    }
  );

  if (error) return JSON.stringify(error, null, 2);

  return (
    <Layout>
      <Head>
        <title>{router.query.name} | Watch Suggestions</title>
        <meta
          name="description"
          content="helping you find something to watch"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="container mx-auto">
        <h2 className="w-max mx-auto my-8 p-8 text-2xl font-bold rounded-full border dark:border-white text-gray-900 dark:text-gray-100">
          {router.query.name}
        </h2>
      </header>

      <QueryResult loading={loading} error={error} data={data}>
        {mediaType == "movie" ? (
          <MovieGrid
            movies={data?.moviesByGenre}
            mediaConfig={data?.mediaConfig}
          />
        ) : (
          <TVShowGrid
            tvshows={data?.tvByGenre}
            mediaConfig={data?.mediaConfig}
          />
        )}
      </QueryResult>
    </Layout>
  );
}

export default Genre;

export const getStaticProps = async (context) => {
  console.log(context);

  return {
    props: {},
  };
};
