import { ApolloClient } from "@apollo/client";

// The InMemoryCache is a normalized cache that stores data in memory.
const client = new ApolloClient({
    uri: "http://localhost:4000/",
    cache: new InMemoryCache(),
});

export default client;