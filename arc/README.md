# About
This is an [Arc Feature Pack](https://dmn.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/recipes/creating-feature-pack.md) that consumes the [GraphQL API](https://github.com/nigelgilbert/graphql-neo4j-sandbox-api/blob/master/src/index.ts) in `src/`.  

It displays a list of `Session` objects from the `GraphConnect 2018 Schedule` sandbox graph.

It demonstrates fetching 3rd-party GraphQL data with **both the Arc [Content API](https://dmn.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/recipes/using-graphql-schema.md) and the [Apollo client.](https://github.com/apollographql/apollo-client)**

The directory structure parities the Fusion CLI directory structure generated with `npx @arc-fusion/cli init`.

## Notes
- Requires `@arc-fusion/cli` version `<= 0.1.38`
