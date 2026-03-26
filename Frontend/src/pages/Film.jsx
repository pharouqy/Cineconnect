import { useParams, useRouter } from "@tanstack/react-router";
import MovieCard from "../components/MovieCard";
import { useMovie } from "../hooks/useMovies";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import Button from "../components/Buttons/Button";

function FilmDetail() {
  const { id } = useParams({ strict: false });
  const { data: movie, isLoading, isError, error } = useMovie(id);
  const router = useRouter();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Détail du film {id}</h1>
      <Button onClick={() => router.history.back()} className="bg-blue-500 text-white px-4 py-2 rounded-md">Retour</Button>
      {isLoading && <LoadingSpinner size="md" text="Chargement du film..." />}
      {isError && (
        <ErrorMessage message={error?.message || "Erreur de chargement"} />
      )}
      {!isLoading && !isError && movie && <MovieCard {...movie} />}
    </div>
  );
}

export default FilmDetail;
