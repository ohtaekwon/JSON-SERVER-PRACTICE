import React from "react";
import { HttpRequest } from "../http/httpRequest";
import { movieService } from "../services/movieService";

export const useMovieModel = () => {
  const [movies, setMovies] = React.useState(null);
  const request = new HttpRequest(movieService);
  const getMoviesCallback = (response) => {
    setMovies(response.data);
  };
  const getMovies = () => {
    request.get("", getMoviesCallback);
  };

  return {
    movies,
    getMovies,
  };
};
