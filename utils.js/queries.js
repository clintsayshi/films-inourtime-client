import { gql } from "@apollo/client";

export const GET_TRENDING_MOVIES = gql`
  query TopTrendingMovies($timeWindow: String!, $limit: Int!) {
    topTrendingMovies(time_window: $timeWindow, limit: $limit) {
      id
      original_title
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
  query TV($timeWindow: String!, $limit: Int!) {
    topTrendingTVShows(time_window: $timeWindow, limit: $limit) {
      original_name
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
