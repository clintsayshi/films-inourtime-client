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
  }
`;

export const GET_MOVIE = gql`
  query movie($movieId: ID!) {
    Movie(id: $movieId) {
      id
      original_title
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
      vote_count
      vote_average
      revenue
      runtime
      production_companies {
        id
        homepage
        logo_path
        name
        origin_country
      }
      popularity
      title
      status
    }
  }
`;
