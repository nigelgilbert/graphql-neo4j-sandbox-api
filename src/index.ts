import { GraphQLServer, Options } from 'graphql-yoga'
import { makeAugmentedSchema } from 'neo4j-graphql-js';
import { v1 as neo4j } from 'neo4j-driver';

const typeDefs = `
  type Session {
    name: String!
    description: String
    date: Date
    tags: [Tag] @relation(name: "HAS_TAG", direction: "OUT")
    venue: Venue @relation(name: "TAKES_PLACE_IN", direction: "OUT")
    speaker: Speaker @relation(name: "SPEAKS_AT", direction: "IN")
  }
  type Tag {
    name: String!
  }
  type Speaker {
    name: String!
    about: String
  }
  type Venue {
    name: String!
  }
  type Query {
    sessionById(_id: ID!): Session
  }
`;

const schema = makeAugmentedSchema({ typeDefs });

const driver = neo4j.driver(
  'bolt://34.201.165.152:33118',
  neo4j.auth.basic('neo4j', 'deserter-hold-cupfuls')
);

const server = new GraphQLServer({
  schema,
  context: { driver },
});

const options: Options = {
  endpoint: '/graphql',
  getEndpoint: true,
  cors: {
    origin: /.*/
  }
};

server.start(options, () => console.log('Server is running on http://localhost:4000'))
