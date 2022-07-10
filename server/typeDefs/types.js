import { gql } from "apollo-server";

export const Types = gql`
  enum Genre {
    METAL
    TRANCE
    FOLK
    MIXED
  }

  type Playlist {
    id: ID!
    name: String!
    author: User
    genre: Genre
    songs: [Song]
  }

  type Song {
    id: ID!
    title: String!
    artist: String
    album: String
  }

  type User {
    id: ID
    username: String
    password: String
  }

  type AuthData {
    userId: ID
    token: String
  }
`;
