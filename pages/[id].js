import { useQuery } from "@apollo/client";
import React from "react";
import Layout from "../components/Layout";
import client from "../utils.js/apollo-client";
import { GET_MOVIE, GET_TRENDING_MOVIES } from "../utils.js/queries";

function Movie({ movie }) {
  return (
    <Layout>
      <h1>{movie.title}</h1>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const { loading, error, data } = await client.query({
    query: GET_TRENDING_MOVIES,
    variables: { timeWindow: "day", limit: 20 },
  });

  console.log(JSON.stringify(error, null, 2));

  if (error) {
    console.log("Error in getStaticPaths()");
  }

  console.log("WE here");

  const peths = data?.topTrendingMovies.map((movie) => ({
    params: { id: movie.id },
  }));

  return {
    paths: peths || [],
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { loading, error, data } = await client.query({
    query: GET_MOVIE,
    variables: { id: params.id },
  });

  if (error) {
    console.log("Error in getStaticProps()");
  }

  return {
    props: {
      movie: data.Movie,
    },
  };
};

export default Movie;
