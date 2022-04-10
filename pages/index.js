import React from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import FeaturedMovies from "../components/FeaturedMovies";
import FeaturedTVShows from "../components/FeaturedTVShows";
import FeaturedGenres from "../components/FeaturedGenres";

export default function Home() {
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

        <section className="relative container mx-auto">
          <header className="sticky top-0 py-2 flex items-center justify-between bg-white dark:bg-gray-900 z-50">
            <h2 className="text-xl font-medium dark:text-gray-100">
              Top Trending Movies
            </h2>

            <div className="flex items-center">
              <Link href="/trending-movies">
                <a className="flex items-center text-sm text-gray-900 dark:text-gray-100">
                  See More&nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </Link>
            </div>
          </header>
          <FeaturedMovies />
        </section>

        <section className="relative container mx-auto">
          <header className="sticky top-0 py-2 flex items-center justify-between bg-white dark:bg-gray-900 z-50">
            <h2 className="text-xl font-medium dark:text-gray-100">
              Top Trending Shows
            </h2>

            <div className="flex items-center">
              <Link href="/trending-series">
                <a className="flex items-center text-sm text-gray-900 dark:text-gray-100">
                  See More&nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </Link>
            </div>
          </header>

          <FeaturedTVShows />
        </section>

        <FeaturedGenres />
      </main>
    </Layout>
  );
}

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
