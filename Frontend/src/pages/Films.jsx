import { useState } from "react";

import MovieCard from "../components/MovieCard";
import MovieGrid from "../components/MovieGrid";
import ErrorMessage from "../components/ErrorMessage";
import LoadingSpinner from "../components/LoadingSpinner";
import { useMovies } from "../hooks/useMovies";

function Films() {
  const [query, setQuery] = useState("");
  const { data: movies, isLoading: loading, isError, error } = useMovies(query);

  return (
    <div className="films-page">
      <h1 className="text-2xl font-bold mb-4">Films</h1>
      <form action="" className="mb-4" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Rechercher un film..."
          className="bg-gray-800 text-gray-400 placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      {loading && <LoadingSpinner size="md" text="Chargement des films..." />}
      {isError && (
        <ErrorMessage message={error?.message} onRetry={() => setQuery("")} />
      )}
      {!loading && !isError && movies?.movies?.length > 0 && (
        <MovieGrid movies={movies.movies} />
      )}
      {!loading &&
        !isError &&
        movies?.length === 0 &&
        query.trim().length > 0 && <p>Aucun film trouvé pour "{query}".</p>}
      {!loading && !isError && query.trim().length === 0 && (
        <p>Entrez un terme de recherche pour voir des films.</p>
      )}
    </div>
  );
}

export default Films;
