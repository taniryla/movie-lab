import MovieCard from "../../components/MovieCard/MovieCard";
import "./MoviesListPage.css";

export default function MoviesListPage({ movies }) {
  const movie = movies.map((m, idx) => <MovieCard key={idx} movie={m} />);

  return (
    <>
      <h1>Movie List Page</h1>
      <div className="movieGrid">{movie}</div>
    </>
  );
}
