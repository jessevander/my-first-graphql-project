import { Playlists } from "../data/data.js";

export const QueryResolvers = {
  Query: {
    playlists: () => Playlists,
  },
};
