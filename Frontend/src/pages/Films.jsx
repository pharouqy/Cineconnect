import { useState, useEffect } from "react";

import { CategoryBadges } from "../components/Categories";

import MovieGrid from "../components/MovieGrid";
import ErrorMessage from "../components/ErrorMessage";
import LoadingSpinner from "../components/LoadingSpinner";
import { useMovies } from "../hooks/useMovies";

function Films() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  // 🔁 Se déclenche à chaque frappe
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query); // met à jour seulement après 300ms de pause
    }, 300);

    return () => clearTimeout(timer); // ⚠️ cleanup : annule le timer si l'user retape
  }, [query]);

  // Réinitialiser la page quand la requête change
  useEffect(() => {
    setPage(1);
  }, [debouncedQuery]);

  const {
    data: movies,
    isLoading: loading,
    isError,
    error,
  } = useMovies(debouncedQuery, page);

  return (
    <>
      <div className="films-page p-4">
        <h1 className="text-2xl font-bold mb-4">Films</h1>
        <form action="" className="mb-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Rechercher un film..."
            className="bg-gray-800 text-gray-400 placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-md py-2 px-4"
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
        <CategoryBadges searchQuery={debouncedQuery} />
        {loading && <LoadingSpinner size="md" text="Chargement des films..." />}
        {isError && (
          <ErrorMessage message={error?.message} onRetry={() => setQuery("")} />
        )}
        {!loading &&
          !isError &&
          movies?.movies?.length === 0 &&
          debouncedQuery.trim().length > 0 && (
            <p>Aucun film trouvé pour "{debouncedQuery}".</p>
          )}
        {!loading && !isError && debouncedQuery.trim().length === 0 && (
          <p className="text-center">
            Entrez un terme de recherche
            <br /> pour voir des films.
          </p>
        )}
      </div>
      <section className="mb-4 min-h-screen">
        {!loading &&
          !isError &&
          movies?.movies?.length > 0 &&
          query.length > 0 && <MovieGrid movies={movies.movies} />}
      </section>
      {!loading &&
        !isError &&
        movies?.movies?.length > 0 &&
        query.length > 0 && (
          <>
            <div className="flex justify-center items-center gap-2 mb-4 text-gray-400">
              <button
                onClick={() => setPage((prev) => Math.max(1, prev - 1))}
                disabled={page === 1}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white text-sm rounded-lg transition-colors"
              >
                Précédente
              </button>
              <p>{page}</p>
              <button
                onClick={() => setPage((prev) => prev + 1)}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white text-sm rounded-lg transition-colors"
                disabled={
                  page === Math.ceil(movies.totalResults / 10) ||
                  movies.totalResults === 0
                }
              >
                Suivante
              </button>
            </div>
            <div className="flex justify-center items-center gap-2 mb-4 text-gray-400">
              <span>Total de pages: {Math.ceil(movies.totalResults / 10)}</span>{" "}
              <span>Total de films: {movies.totalResults}</span>
            </div>
          </>
        )}
    </>
  );
}

export default Films;
