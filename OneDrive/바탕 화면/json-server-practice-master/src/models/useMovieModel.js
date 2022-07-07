import React from "react";
import { movieRequest } from "../services/movieService";

export const useMovieModel = () => {
  const [movies, setMovies] = React.useState(null);

  const getMoviesCallback = (response) => {
    console.log("response", response);
    setMovies(response.data);
  };
  const getServices = () => {
    movieRequest.get("", getMoviesCallback);
  };

  const patchMovieById = async (id, data) => {
    movieRequest.patch(id, data);
  };

  return {
    movies,
    getServices,
    patchMovieById,
  };
};
