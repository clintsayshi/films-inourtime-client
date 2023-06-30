import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const httpLink = new HttpLink({
  uri: "https://strong-dodol-53dc9a.netlify.app",
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );
    });
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

// If you provide a link chain to ApolloClient, you
// don't provide the `uri` option.
const client = new ApolloClient({
  uri: "https://strong-dodol-53dc9a.netlify.app",
  //uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

export default client;
