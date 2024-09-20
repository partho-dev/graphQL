import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';

// Define the GraphQL schema
const typeDefs = `#graphql
  type Query {
    hello: String
  }
  `;

// Define the resolvers
const resolvers = {
  Query: {
    hello: () => 'Hello, world!',
  },
};

const server = new ApolloServer({
  typeDefs:typeDefs,
  resolvers:resolvers,
  introspection: true
});

export const config = {
  api: {
    bodyParser: true,
  },
};

export default startServerAndCreateNextHandler(server);
// export const {GET, POST} = startServerAndCreateNextHandler(server);