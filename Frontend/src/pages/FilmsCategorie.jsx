import { useState } from "react";
import { useParams, useSearch } from "@tanstack/react-router";
import MovieCards from "../components/MovieCards";
import ErrorMessage from "../components/ErrorMessage";
import LoadingSpinner from "../components/LoadingSpinner";
import { useMoviesByCategory } from "../hooks/useMovies";
import Button from "../components/Buttons/Button";

function FilmsCategorie() {
  const { categorie } = useParams({ strict: false });
  const search = useSearch({ strict: false });
  const t = search?.t || "";

  const [page, setPage] = useState(1);

  const { data: movies, isLoading, isError, error } = useMoviesByCategory(
    categorie,
    t,
    page,
  );

  const moviesList = movies?.movies || [];

  console.log(movies);

  return (
    <div className="films-page p-4">
      <h1 className="text-2xl font-bold mb-4 capitalize">
        Catégorie : {categorie}
      </h1>

      {!isLoading && !isError && moviesList.length === 0 && t && (
        <p>Aucun résultat trouvé pour "{t}" dans cette catégorie.</p>
      )}
      {!isLoading && !isError && moviesList.length === 0 && !t && (
        <p>Entrez un terme de recherche pour voir les résultats.</p>
      )}

      <div className="movie-grid p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {isError && (
          <ErrorMessage message={error?.message || "Erreur de chargement"} />
        )}
        {isLoading && <LoadingSpinner />}
        {moviesList.map((movie) => (
          <MovieCards key={movie.imdbID} {...movie} />
        ))}
      </div>
      {!isLoading && !isError && moviesList.length > 0 && (
        <>
          <div className="flex justify-center items-center gap-2 mb-4 text-gray-400">
              <Button
                onClick={() => setPage((prev) => Math.max(1, prev - 1))}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white text-sm rounded-lg transition-colors"
              >
                {"<"}
              </Button>
              <p>{page}</p>
              <Button
                onClick={() =>
                  setPage((prev) =>
                    Math.min(prev + 1, Math.ceil(movies.totalResults / 10)),
                  )
                }
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white text-sm rounded-lg transition-colors"
              >
                {">"}
              </Button>
          </div>
          <div className="flex justify-center items-center gap-2 mb-4 text-gray-400">
            <span>
              Total de pages: {Math.ceil(movies.totalResults / 10)}
            </span>{" "}
            <span>Total de films: {movies.totalResults}</span>
          </div>
        </>
      )}
    </div>
  );
}

export default FilmsCategorie;
