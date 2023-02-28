import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: import.meta.env.VITE_GRAPHQL_URI,
});

export default client;
