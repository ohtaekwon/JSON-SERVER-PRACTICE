import React from "react";
import { useMovieModel } from "./models/useMovieModel";
function App() {
  const { movies, getMovies } = useMovieModel();
  React.useEffect(() => {
    getMovies();
  }, []);
  console.log("this movies", movies);
  return <div className="App"></div>;
}

export default App;
