import { gql } from "@apollo/client";

export const GET_TRENDING_MOVIES = gql`
  query TopTrendingMovies($timeWindow: String!, $limit: Int!) {
    trendingMovies(time_window: $timeWindow, limit: $limit) {
      id
      original_title
      title
      original_language
      release_date
      overview
      adult
      poster_path
      vote_count
      vote_average
      revenue
      production_companies {
        homepage
        logo_path
        name
        origin_country
        id
      }
      popularity
      title
      status
    }
    mediaConfig {
      secure_base_url
      poster_sizes
      logo_sizes
    }
  }
`;

export const GET_TRENDING_TV = gql`
  query getTrendingTV($timeWindow: String!, $limit: Int!) {
    trendingTVShows(time_window: $timeWindow, limit: $limit) {
      original_name
      name
      id
      poster_path
      first_air_date
      seasons {
        id
        air_date
        episode_count
      }

      vote_average
    }
    mediaConfig {
      secure_base_url
      poster_sizes
      logo_sizes
    }
  }
`;

export const GET_LIST_OF_GENRES = gql`
  query ListOfGenres($mediaType: String!) {
    listOfGenres(mediaType: $mediaType) {
      id
      name
    }
  }
`;

export const GET_MOVIES_BY_GENRE = gql`
  query MoviesByGenre($genreId: ID!, $year: Int!) {
    moviesByGenre(genreId: $genreId, year: $year) {
      id
      title
      release_date
      vote_average
      poster_path
    }
    mediaConfig {
      secure_base_url
      poster_sizes
      logo_sizes
    }
  }
`;

export const GET_MOVIE = gql`
  query Movie($movieId: ID!) {
    Movie(id: $movieId) {
      original_title
      id
      original_language
      release_date
      overview
      adult
      backdrop_path
      poster_path
      videos {
        id
        name
        key
        type
      }
      genres {
        name
        id
      }
      vote_average
      production_companies {
        id
        homepage
        logo_path
        name
        origin_country
      }
      status
      popularity
      title
    }
    mediaConfig {
      secure_base_url
      poster_sizes
      logo_sizes
    }
  }
`;

export const GET_SERIES = gql`
  query getTVShow($tvShowId: ID!) {
    TVShow(id: $tvShowId) {
      id
      original_name
      original_language
      name
      vote_average
      overview
      seasons {
        id
        air_date
        episode_count
        name
        poster_path
      }
      number_of_episodes
      number_of_seasons
      poster_path
      first_air_date
      genres {
        name
        id
      }
    }
    mediaConfig {
      secure_base_url
      poster_sizes
      logo_sizes
    }
  }
`;
