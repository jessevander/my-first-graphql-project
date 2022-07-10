import { ApolloServer } from "apollo-server";
import { Types, Queries } from "./typeDefs/index.js";
import { QueryResolvers } from "./resolvers/index.js";

/*
 * TODO:
 * Mongoose Database
 */

/*
 * Apollo Client
 */
const typeDefs = [Types, Queries];
const resolvers = [QueryResolvers];
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

/*
 * Start Server
 */
server.listen().then(({ url }) => {
  console.log(`🚀 Lift-off! Server started at ${url} 🚀 `);
});
