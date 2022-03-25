import Image from "next/image";
import Link from "next/link";
import React from "react";

function SeriesCard({ series, mediaConfig }) {
  const { id, poster_path, original_name, first_air_date, vote_average } =
    series;
  const { secure_base_url, poster_sizes } = mediaConfig;

  return (
    <Link href={`/tvshow/${id}`}>
      <a className="relative block hover:shadow py-4 hover:px-4 transition-all ease-in-out duration-300 group">
        <div className="relative w-full h-96 lg:h-96 mb-2">
          <Image
            className="block object-cover object-top"
            src={`${secure_base_url}/t/p/${poster_sizes[4]}/${poster_path}`}
            layout="fill"
            alt=""
          />
        </div>
        <h3 className="text-lg underline underline-offset-4 dark:text-gray-100">
          {original_name}&nbsp;({first_air_date.substring(0, 4)})
        </h3>
        <div className="flex items-center justify-between gap-2">
          <small className="text-gray-900 dark:text-gray-100">
            {vote_average} rating
          </small>

          <button className="hidden dark:text-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
      </a>
    </Link>
  );
}

export default SeriesCard;
