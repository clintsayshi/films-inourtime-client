import Image from "next/image";
import Link from "next/link";
import React from "react";

function MovieCard({ movie, mediaConfig }) {
  const { id, poster_path, original_title, release_date, vote_average } = movie;
  const { secure_base_url, poster_sizes } = mediaConfig;

  return (
    <Link key={movie.id} href={`/${id}`}>
      <a className="relative block rounded-2xl group">
        <div className="absolute inset-0 bg-black bg-opacity-30 z-30 group-hover:bg-opacity-0 transition-opacity ease-in-out duration-300"></div>
        <div className="relative z-10 w-full h-96">
          <Image
            className="block rounded-0 object-cover object-top"
            src={`${secure_base_url}/t/p/${poster_sizes[4]}/${poster_path}`}
            layout="fill"
            alt=""
          />
        </div>
        <div className="absolute bottom-4 left-4 z-40">
          <h3 className="text-lg sm:text-2xl font-bold text-white">
            {original_title}
          </h3>
          <p className="text-lg text-white">{release_date.substring(0, 4)}</p>
          <div className="flex items-center gap-2">
            <div className="relative h-6 w-10">
              <Image
                className="object-cover"
                src="https://m.media-amazon.com/images/G/01/IMDb/BG_rectangle._CB1509060989_SY230_SX307_AL_.png"
                layout="fill"
                alt=""
              />
            </div>
            <small className="text-white text-base font-medium">
              {vote_average} rating
            </small>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default MovieCard;
