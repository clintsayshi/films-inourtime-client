import { gql, request, useLazyQuery, useQuery } from "@apollo/client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Layout from "../../components/Layout";
import client from "../../utils.js/apollo-client";
import {
  GET_MOVIE,
  GET_SERIES,
  GET_TRENDING_MOVIES,
  GET_TRENDING_TV,
} from "../../utils.js/queries";

function Series({ data }) {
  const {
    original_name,
    vote_average,
    first_air_date,
    status,
    production_companies,
    genres,
    overview,
    poster_path,
  } = data.TVShow;
  const { secure_base_url, poster_sizes } = data.mediaConfig;

  return (
    <Layout>
      <div className="hidden absolute inset-0 h-screen w-full p-6 bg-black bg-opacity-60 z-50">
        <div className="h-full w-full">
          <figure className="relative h-full p-4 bg-gray-100 z-30">
            <Image
              className="block object-contain object-top position-fixed"
              src={`${secure_base_url}original/${poster_path}`}
              alt=""
              layout="fill"
              priority
            />
          </figure>
        </div>
      </div>

      <div className="relative w-full h-72">
        <Image
          className="block object-fit object-top position-fixed"
          src={`${secure_base_url}${poster_sizes[5]}/${poster_path}`}
          alt=""
          layout="fill"
          priority
        />
      </div>

      <section className="container mx-auto ">
        <header className="p-4 flex flex-col items-center gap-2">
          <h2 className="text-2xl text-center uppercase font-medium dark:text-gray-100">
            {original_name} - {first_air_date.substring(0, 4)}
          </h2>
          <small className="text-gray-900 dark:text-gray-100">
            {vote_average}&nbsp;IMDb rating
          </small>
          <div className="py-2 flex flex-wrap items-center gap-2">
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
    query: GET_TRENDING_TV,
    variables: { timeWindow: "day", limit: 20 },
  });

  if (loading) console.log("LOADING:");
  if (error) console.log("ERROR:", error);

  return {
    paths:
      data?.trendingTVShows.map((series) => ({
        params: { seriesId: series.id },
      })) || [],
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  console.log(params);
  const { loading, error, data } = await client.query({
    query: GET_SERIES,
    variables: {
      tvShowId: params.seriesId,
    },
  });

  if (error) console.log(error);

  return {
    props: {
      data,
    },
  };
};

export default Series;
