import React from "react";
import { HttpRequest } from "../http/httpRequest";
import { movieService } from "../services/movieService";
// import { anotherMovieService } from "../services/anotherMovieService";

export const useMovieModel = () => {
  const [movies, setMovies] = React.useState(null);
  // const [anotherMovies, setAnotherMovies] = React.useState(null);

  const request = new HttpRequest(movieService);
  // const anotherRequest = new HttpRequest(anotherMovieService);

  const getMoviesCallback = (response) => {
    console.log("response", response);
    setMovies(response.data);
    // setAnotherMovies(response.data);
  };
  const getServices = () => {
    request.get("", getMoviesCallback);
    // await anotherRequest.get("", getMoviesCallback);
  };

  return {
    movies,
    // anotherMovies,
    getServices,
  };
};
