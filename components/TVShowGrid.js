import React from "react";
import TVShowCard from "./TVShowCard";

function TVShowGrid({ tvshows, mediaConfig }) {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
      {tvshows.map((show) => {
        return (
          <TVShowCard key={show.id} tvshow={show} mediaConfig={mediaConfig} />
        );
      })}
    </div>
  );
}

export default TVShowGrid;
