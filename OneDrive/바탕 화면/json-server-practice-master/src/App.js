import React from "react";
import { useMovieModel } from "./models/useMovieModel";
function App() {
  const { movies, getServices, patchMovieById } = useMovieModel();

  React.useEffect(() => {
    getServices();
  }, []);

  const onClickImgCallback = (id, data) => {
    patchMovieById(id, data).then(getServices);
    console.log(movies);
  };
  // console.log("this movies", movies);
  return (
    <>
      <div className="App">
        {movies?.map((movie, index) => (
          <span key={index}>
            <img
              style={{
                border: movie.like === "like" ? "5px solid red" : "none",
              }}
              onClick={() => onClickImgCallback(movie.id, { like: "like" })}
              src={movie.poster}
              alt={movie.title}
            />
          </span>
        ))}
      </div>
    </>
  );
}

export default App;
