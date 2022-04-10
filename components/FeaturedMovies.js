import { useQuery } from "@apollo/client";
import MovieGrid from "../components/MovieGrid";
import QueryResult from "../components/QueryResult";
import { GET_TRENDING_MOVIES } from "../utils.js/queries";

function FeaturedMovies() {
  const { loading, error, data } = useQuery(GET_TRENDING_MOVIES, {
    variables: { timeWindow: "day", limit: 4 },
  });

  console.log(data);

  return (
    <QueryResult loading={loading} error={error}>
      <MovieGrid
        movies={data?.trendingMovies}
        mediaConfig={data?.mediaConfig}
      />
    </QueryResult>
  );
}

export default FeaturedMovies;
