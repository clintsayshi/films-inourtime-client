import { useQuery } from "@apollo/client";
import QueryResult from "../components/QueryResult";
import { GET_TRENDING_TV } from "../utils.js/queries";
import TVShowGrid from "./TVShowGrid";

function FeaturedTVShows() {
  const { loading, error, data } = useQuery(GET_TRENDING_TV, {
    variables: { timeWindow: "day", limit: 4 },
  });

  console.log(data);

  return (
    <QueryResult loading={loading} error={error}>
      <TVShowGrid
        tvshows={data?.trendingTVShows}
        mediaConfig={data?.mediaConfig}
      />
    </QueryResult>
  );
}

export default FeaturedTVShows;
