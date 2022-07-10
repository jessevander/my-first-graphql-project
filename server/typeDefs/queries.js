import { gql } from "apollo-server";

export const Queries = gql`
  type Query {
    playlists: [Playlist]
    # playlist(id: ID!): Playlist
    # song(id: ID!): Song
    # users: [User]
    # user(id: ID!): User
  }
`;
