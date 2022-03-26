import { gql, request, useLazyQuery, useQuery } from "@apollo/client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Layout from "../../components/Layout";
import client from "../../utils.js/apollo-client";
import { GET_MOVIE, GET_TRENDING_MOVIES } from "../../utils.js/queries";

function Movie({ data }) {
  const {
    original_title,
    vote_average,
    release_date,
    backdrop_path,
    status,
    production_companies,
    genres,
    overview,
    poster_path,
  } = data.Movie;
  const { secure_base_url, poster_sizes } = data.mediaConfig;

  const [posterModal, setPosterModal] = useState(false);

  return (
    <Layout>
      <div
        className={`relative w-full h-96 bg-[${secure_base_url}${poster_sizes[5]}/${poster_path}]`}
      >
        <Image
          className="block object-cover object-center position-fixed"
          src={`${secure_base_url}/original/${backdrop_path}`}
          alt=""
          layout="fill"
          priority
        />
      </div>

      <section className="container mx-auto ">
        <header className="p-4 flex flex-col items-center gap-2">
          <h2 className="text-2xl text-center uppercase font-medium dark:text-gray-100">
            {original_title} - {release_date.substring(0, 4)}
          </h2>
          <small className="text-gray-900 dark:text-gray-100">
            {vote_average}&nbsp;IMDb rating
          </small>
          <div className="py-2 flex items-center gap-2">
            {genres.map((genre) => (
              <a
                key={genre.id}
                className="w-max block px-4 py-1 text-sm text-center text-gray-900 dark:text-gray-100 border rounded-full"
                href="#"
              >
                {genre.name}
              </a>
            ))}
          </div>
        </header>

        <div className="container mx-auto p-4 flex flex-col">
          <p className="text-gray-900 dark:text-gray-100">{overview}</p>
        </div>
      </section>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const { loading, error, data } = await client.query({
    query: GET_TRENDING_MOVIES,
    variables: { timeWindow: "day", limit: 20 },
  });

  if (loading) console.log("LOADING:");
  if (error) console.log("ERROR:", error);

  return {
    paths:
      data?.topTrendingMovies.map((movie) => ({
        params: { movieId: movie.id },
      })) || [],
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  console.log(params);
  const { loading, error, data } = await client.query({
    query: GET_MOVIE,
    variables: {
      movieId: params.movieId,
    },
  });

  if (error) console.log(error);

  return {
    props: {
      data,
    },
  };
};

export default Movie;
