import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";

// Use native WebSocket for browser and ws for Node.js/React Native
const WebSocketImpl =
  typeof window !== "undefined" ? window.WebSocket : require("ws");

const httpLink = new HttpLink({
  uri: `https://${process.env.EXPO_PUBLIC_API_URL}`,
  headers: {
    "x-hasura-admin-secret": process.env.EXPO_PUBLIC_API_KEY || "",
  },
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: `wss://${process.env.EXPO_PUBLIC_API_URL}`,
    webSocketImpl: WebSocketImpl,
    connectionParams: {
      headers: {
        "x-hasura-admin-secret": process.env.EXPO_PUBLIC_API_KEY,
      },
    },
  })
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

export const clientApollo = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});
