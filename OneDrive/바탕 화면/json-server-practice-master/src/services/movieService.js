import axios from "axios";
import { HttpRequest } from "../http/httpRequest";

// 사용자 지정 config 새로운 Axios 인스턴스를 만듦
export const movieService = axios.create({
  baseURL: "http://localhost:8000/movie",
});
export const movieRequest = new HttpRequest(movieService);
