import React from "react";
import MovieCard from "./MovieCard";

function MovieGrid({ movies, mediaConfig }) {
  return (
    <div className="container mx-auto py-2 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {movies.map((movie) => {
        return (
          <MovieCard key={movie.id} movie={movie} mediaConfig={mediaConfig} />
        );
      })}
    </div>
  );
}

export default MovieGrid;
