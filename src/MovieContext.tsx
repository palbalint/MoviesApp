import React, { createContext } from "react";

import { Movie } from "./interfaces";

interface MovieContextType {
  movies: Movie[];
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
}

export const MovieContext = createContext<MovieContextType>({
  movies: [],
  setMovies: () => undefined,
});
