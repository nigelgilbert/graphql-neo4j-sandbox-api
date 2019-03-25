import { GraphQLServer, Options } from 'graphql-yoga'
import { makeAugmentedSchema } from 'neo4j-graphql-js';
import { v1 as neo4j } from 'neo4j-driver';

const typeDefs = `
  type Session {
      name: String!
      description: String
      date: Date
      tags: [Tag] @relation(name: "HAS_TAG", direction: "OUT")
  }
  type Tag {
      name: String!
  }
`;

const schema = makeAugmentedSchema({ typeDefs });

const driver = neo4j.driver(
  'bolt://34.201.165.152:32909',
  neo4j.auth.basic('neo4j', 'meaning-vehicles-jeopardies')
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
