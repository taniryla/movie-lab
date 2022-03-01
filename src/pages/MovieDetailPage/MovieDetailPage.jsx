import React from "react";
import "./MovieDetailPage.css";
import { useParams } from "react-router-dom";

export default function MovieDetailPage({ movies }) {
  let { movieName } = useParams();
  let movie = movies.find((m) => m.title === movieName);

  return (
    <div>
      <h1>{movie.title}</h1>
      <h1>Date: {movie.dateReleased}</h1>
      <h3>Cast Members: {movie.cast.join(", ")}</h3>
      <div className="poster">
        <div style={{ backgroundImage: `url(${movie.posterPath})` }}></div>
        <div style={{ backgroundImage: `url(${movie.posterPath})` }}></div>
        <div style={{ backgroundImage: `url(${movie.posterPath})` }}></div>
      </div>
    </div>
  );
}
