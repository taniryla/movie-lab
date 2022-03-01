import "./MovieCard.css";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <Link to={`/movies/${movie.title}`}>
      <div
        className="movieCard"
        style={{ backgroundImage: `url(${movie.posterPath})` }}
      >
        <li>{movie.title}</li>
        <li>{movie.releaseDate}</li>
      </div>
    </Link>
  );
}
