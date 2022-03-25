import React from "react";
import SeriesCard from "./SeriesCard";

function SeriesGrid({ series, mediaConfig }) {
  return (
    <div className="container mx-auto py-2 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {series.map((show) => {
        return (
          <SeriesCard key={show.id} series={show} mediaConfig={mediaConfig} />
        );
      })}
    </div>
  );
}

export default SeriesGrid;
