import MovieCard from "./MovieCard";

function MovieGrid({ movies }) {
  return (
    <div className="movie-grid p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} {...movie} />
      ))}
    </div>
  );
}

export default MovieGrid;
