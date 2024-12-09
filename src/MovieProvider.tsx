import React, { ReactNode, useState } from "react";
import { Movie } from "./interfaces";
import { MovieContext } from "./MovieContext";
import moviesData from "./movies.json";

interface MovieProviderProps {
  children: ReactNode;
}

export const MovieProvider: React.FC<MovieProviderProps> = ({ children }) => {
  const [movies, setMovies] = useState<Movie[]>(moviesData);

  return (
    <MovieContext.Provider value={{ movies, setMovies }}>
      {children}
    </MovieContext.Provider>
  );
};
