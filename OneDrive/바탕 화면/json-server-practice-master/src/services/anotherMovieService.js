import axios from "axios";
import React from "react";

// 사용자 지정 config 새로운 Axios 인스턴스를 만듦
export const anotherMovieService = axios.create({
  baseURL: "http://localhost:6000/movie",
});
