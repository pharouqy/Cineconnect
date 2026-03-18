import { Link } from "@tanstack/react-router";

function MovieCard({ title, year, poster, imdbRating, imdbID }) {
  const isMissing = !poster || poster === "N/A";
  return (
    <Link to={`/film/${imdbID}`}>
      <article className="movie-card flex flex-col items-center bg-white p-4 rounded shadow">
        <h2>{title}</h2>
        <p>{year}</p>
        {isMissing ? (
          <p>Poster non disponible</p>
        ) : (
          <img src={poster} alt={title} className="w-full h-auto" />
        )}
        <p>IMDb Rating: {imdbRating}</p>
        <p>IMDb ID: {imdbID}</p>
      </article>
    </Link>
  );
}

export default MovieCard;
