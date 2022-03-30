import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { gql, useQuery } from "@apollo/client";
import MovieCard from "../components/MovieCard";
import SeriesCard from "../components/SeriesCard";
import Layout from "../components/Layout";
import client from "../utils.js/apollo-client";
import {
  GET_LIST_OF_GENRES,
  GET_TRENDING_MOVIES,
  GET_TRENDING_TV,
} from "../utils.js/queries";

export default function Home({ movies, tv, genres }) {
  console.log(genres);

  return (
    <Layout>
      <Head>
        <title>Watch Suggestions</title>
        <meta
          name="description"
          content="helping you find something to watch"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="  dark:bg-gray-900">
        <section className="container mx-auto px-4 flex flex-col">
          <div className="py-16 sm:py-24">
            <h1 className="w-max mx-auto px-4 py-2 text-lg sm:text-4xl text-center    -gray-900 dark:border-gray-100 rounded-full dark:text-gray-100">
              Find something to watch
            </h1>
          </div>
        </section>

        <section className="relative container mx-auto px-4">
          <header className="sticky top-0 flex items-center justify-between dark:bg-gray-900 z-50">
            <h2 className="text-2xl font-medium dark:text-gray-100">
              Top Trending Movies
            </h2>

            <div className="flex items-center">
              <Link href="/trending-movies">
                <a className="text-gray-900 dark:text-gray-100">View All</a>
              </Link>
            </div>
          </header>

          <div className="py-2 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {movies?.trendingMovies.slice(0, 4).map((movie) => {
              return (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  mediaConfig={movies.mediaConfig}
                />
              );
            })}
          </div>
        </section>

        <section className="relative container mx-auto px-4">
          <header className="sticky top-0 py-2 flex items-center justify-between dark:bg-gray-900 z-50">
            <h2 className="text-2xl font-medium dark:text-gray-100">
              Top Trending Shows
            </h2>

            <div className="flex items-center">
              <Link href="/trending-series">
                <a className="text-gray-900 dark:text-gray-100">View All</a>
              </Link>
            </div>
          </header>

          <div className="py-2 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {tv?.slice(0, 4).map((series) => {
              return (
                <SeriesCard
                  key={series.id}
                  series={series}
                  mediaConfig={movies.mediaConfig}
                />
              );
            })}
          </div>
        </section>

        <section className="relative container mx-auto px-4">
          <header className="sticky top-0 py-2 flex items-center justify-between dark:bg-gray-900 z-50">
            <h2 className="text-2xl font-medium dark:text-gray-100">
              Browse Movies By genre
            </h2>
          </header>

          <div className="py-2 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {genres?.map((genre) => {
              return (
                <Link
                  href={{
                    pathname: "/genre",
                    query: { genreId: genre.id, name: genre.name },
                  }}
                  key={genre.id}
                >
                  <a className="w-max p-8 rounded-full border">{genre.name}</a>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const { error: moviesError, data: movies } = await client.query({
    query: GET_TRENDING_MOVIES,
    variables: { timeWindow: "day", limit: 4 },
  });

  const { error: tvError, data: tv } = await client.query({
    query: GET_TRENDING_TV,
    variables: { timeWindow: "day", limit: 4 },
  });

  const { error: genresError, data: genres } = await client.query({
    query: GET_LIST_OF_GENRES,
    variables: { mediaType: "movie" },
  });
  console.log(genres.listOfGenres);
  if (moviesError) console.log("ERROR...");
  if (tvError) console.log("ERROR...");
  if (genresError) console.log("ERROR...");
  //if (tvError) console.log("Error connecting to the server...");

  return {
    props: {
      movies: movies,
      tv: tv.trendingTVShows,
      genres: genres.listOfGenres,
    },
  };
};
