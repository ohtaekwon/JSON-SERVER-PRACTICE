import React from "react";
import { useMovieModel } from "./models/useMovieModel";
function App() {
  const { movies, getServices } = useMovieModel();
  React.useEffect(() => {
    getServices();
  }, []);
  console.log("this movies", movies);
  // console.log("another", anotherMovies);
  return <div className="App"></div>;
}

export default App;
