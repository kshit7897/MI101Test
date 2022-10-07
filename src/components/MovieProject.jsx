import React, { useState } from "react";

const MovieProject = () => {
  const [movieData, setMovieData] = useState("");
  const [ratingData, setRatingData] = useState("");

  const movieName = (e) => {
    setMovieData(e.target.value);
    console.log(setMovieData);
  };

  const rating = (e) => {
    setRatingData(e.target.value);
  };
  return (
    <div>
      <input onChange={movieName} type="text" placeholder="moviename" />
      <input onChange={rating} type="text" placeholder="Rating" />
      <h1>{movieData}</h1>
      <h1>{ratingData}</h1>
    </div>
  );
};

export default MovieProject;
