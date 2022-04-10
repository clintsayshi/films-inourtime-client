import { useQuery } from "@apollo/client";
import Link from "next/link";
import { useState } from "react";
import QueryResult from "../components/QueryResult";
import { GET_LIST_OF_GENRES } from "../utils.js/queries";

function FeaturedGenres() {
  const [byGenre, setByGenre] = useState({
    title: "Movies",
    value: "movie",
  });

  const { loading, error, data } = useQuery(GET_LIST_OF_GENRES, {
    variables: { mediaType: byGenre.value, limit: 50 },
  });

  const byWhichGenre = (e) => {
    if (e.target.value === "movie")
      setByGenre({
        title: "Movies",
        value: "movie",
      });
    else
      setByGenre({
        title: "TV shows",
        value: "tv",
      });
  };

  console.log(data);

  return (
    <section className="relative container mx-auto px-4">
      <header className="sticky top-0 py-4 flex items-center justify-between bg-white dark:bg-gray-900 z-50">
        <h2 className="text-2xl font-medium dark:text-gray-100">
          {byGenre.title}&nbsp;by genre
        </h2>
        <div className="space-x-2">
          <button
            className="text-sm dark:text-gray-100"
            onClick={byWhichGenre}
            value="movie"
          >
            Movies
          </button>
          <button
            className="text-sm dark:text-gray-100"
            onClick={byWhichGenre}
            value="tv"
          >
            TV Shows
          </button>
        </div>
      </header>
      <QueryResult loading={loading} error={error}>
        <div className="py-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {data?.listOfGenres.map((genre) => {
            return (
              <Link
                href={{
                  pathname: "/genre",
                  query: {
                    genreId: genre.id,
                    name: genre.name,
                    mediaType: byGenre.value,
                  },
                }}
                key={genre.id}
              >
                <a className="w-fill p-8 dark:text-gray-100 border">
                  {genre.name}
                </a>
              </Link>
            );
          })}
        </div>
      </QueryResult>
    </section>
  );
}

export default FeaturedGenres;
