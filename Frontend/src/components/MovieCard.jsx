import { Link } from "@tanstack/react-router";

function MovieCard({ Title, Year, Poster, imdbID }) {
  const isMissing = !Poster || Poster === "N/A";
  return (
    <Link to={`/film/${imdbID}`}>
      <article className="movie-card flex flex-col items-center bg-white p-4 rounded shadow">
        <h2>{Title}</h2>
        <p>{Year}</p>
        {isMissing ? (
          <img
            src="https://via.placeholder.com/300x400?text=No+Poster"
            alt="Poster non disponible"
            className="w-full"
          />
        ) : (
          <img
            src={Poster}
            alt={Title}
            className="w-full object-cover mb-4 h-64"
          />
        )}
        <p>IMDb ID: {imdbID}</p>
      </article>
    </Link>
  );
}

export default MovieCard;
