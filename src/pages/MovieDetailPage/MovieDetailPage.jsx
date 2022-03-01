import React from "react";

import { useParams } from "react-router-dom";

export default function MovieDetailPage({ movies }) {
  let { movieName } = useParams();
  let movie = movies.find((m) => m.title === movieName);

  return (
    <div>
      <h1>{movie.title}</h1>
      <h1>Date: {movie.dateReleased}</h1>
      <h3>Cast Members: {movie.cast.join(", ")}</h3>
    </div>
  );
}
