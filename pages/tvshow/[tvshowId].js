import { gql, request, useLazyQuery, useQuery } from "@apollo/client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Layout from "../../components/Layout";
import client from "../../utils.js/apollo-client";
import {
  GET_MOVIE,
  GET_TV,
  GET_TRENDING_MOVIES,
  GET_TRENDING_TV,
} from "../../utils.js/queries";
import { getDate, getTrailer, monthNames } from "../../utils.js/functions";
import Link from "next/link";
import YoutubeEmbed from "../../components/YoutubeEmbed";
import Head from "next/head";

function TVShow({ data }) {
  const {
    original_name,
    name,
    vote_average,
    first_air_date,
    status,
    videos,
    seasons,
    production_companies,
    genres,
    overview,
    poster_path,
    backdrop_path,
  } = data.TVShow;
  const { secure_base_url, poster_sizes } = data.mediaConfig;

  return (
    <Layout>
      <Head>
        <title>{name} | Watch Suggestions</title>
        <meta
          name="description"
          content="helping you find something to watch"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto space-y-2 lg:space-y-6">
        {/* Headings - Title/Name */}
        <header className="p-4 sm:px-0 space-y-4 sm:space-y-6">
          <small className="flex items-center flex-wrap space-x-2 text-base text-gray-800 sm:text-sm dark:text-gray-100">
            <span title="The release date">{getDate(first_air_date)}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span title="The original title">{original_name}</span>
          </small>
          <h1 className="text-4xl sm:text-5xl font-display font-bold dark:text-gray-100">
            {name}
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 space-y-4 md:space-y-0 md:space-x-12">
          {/* Media */}
          <div
            className={`relative w-full h-72 lg:h-96 bg-[${secure_base_url}${poster_sizes[5]}/${poster_path}]`}
          >
            {getTrailer(videos) ? (
              <YoutubeEmbed videoId={getTrailer(videos)} />
            ) : (
              <Image
                className="object-cover"
                src={`${secure_base_url}/original/${poster_path}`}
                alt={original_name}
                layout="fill"
              />
            )}
          </div>

          <div className="px-4 sm:px-0 space-y-2">
            <div className="flex justify-between items-center">
              <small className="text-gray-900 dark:text-gray-100">
                {vote_average}&nbsp;IMDb rating
              </small>

              <button className="hidden">to the MOON</button>
            </div>

            <div className="py-2 flex items-center gap-2">
              {genres.map((genre) => (
                <Link
                  key={genre.id}
                  href={{
                    pathname: "/genre",
                    query: { genreId: genre.id, name: genre.name },
                  }}
                >
                  <a className="w-max block px-3 py-1 text-sm text-center text-gray-900 dark:text-gray-100 border rounded-full">
                    {genre.name}
                  </a>
                </Link>
              ))}
            </div>

            <p className="text-gray-900 dark:text-gray-100">{overview}</p>

            <div className="py-4 space-y-4">
              {seasons.map((season) => (
                <details key={season.id} className="w-full shadow border">
                  <summary className="px-4 py-2 border-b text-lg dark:text-gray-100 font-medium marker:content-none transition-colors duration-200 outline-none cursor-pointer">
                    {season.name}
                  </summary>
                  <div className="p-4 space-y-4 flex flex-col items-start transition-all duration-150 ">
                    {season.poster_path != null ? (
                      <div className="relative flex justify-start h-96 w-full sm:w-56 border">
                        <Image
                          className="object-contain dark:text-gray-100"
                          src={`${secure_base_url}original/${season.poster_path}`}
                          alt={season.name}
                          layout="fill"
                        />
                      </div>
                    ) : (
                      ""
                    )}

                    <p className="dark:text-gray-100">
                      {season.overview != ""
                        ? season.overview
                        : "Overview not found"}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="container mx-auto "></section>
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
      data?.trendingTVShows.map((tvshow) => ({
        params: { tvshowId: tvshow.id },
      })) || [],
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  console.log(params);
  const { loading, error, data } = await client.query({
    query: GET_TV,
    variables: {
      tvShowId: params.tvshowId,
    },
  });

  if (error) console.log(error);

  return {
    props: {
      data,
    },
  };
};

export default TVShow;
