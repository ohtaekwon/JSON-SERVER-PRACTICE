import axios from "axios";
import React from "react";

export const movieService = axios.create({
  baseURL: "http://localhost:8000/movie",
});
