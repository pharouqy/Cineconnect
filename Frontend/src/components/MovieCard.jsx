import { CategoryBadges } from "./Categories";
import Ratings from "./Ratings";

function MovieCard({
  Title,
  Year,
  Released,
  Runtime,
  Genre,
  Director,
  Writer,
  Actors,
  Plot,
  Language,
  Country,
  Awards,
  Poster,
  imdbID,
  Type,
}) {
  const isMissing = !Poster || Poster === "N/A";

  // OMDb renvoie souvent "Genre" sous forme "Action, Drama, ..."
  const genres =
    Genre && Genre !== "N/A"
      ? Genre.split(",")
          .map((g) => g.trim())
          .filter(Boolean)
      : [];

  const CATEGORIES = genres.map((genre) => ({
    label: genre,
    slug: genre.toLowerCase(),
  }));

  // "Type" OMDb vaut typiquement "movie" ou "series"
  const categorieType = (Type || "movie").toLowerCase();

  return (
    <div className="movie-card flex flex-col items-center bg-white p-4 rounded shadow">
        <h2 className="text-2xl font-bold">{Title}</h2>
        <p className="text-gray-500">{Year}</p>
        {isMissing ? (
          <img
            src="https://via.placeholder.com/300x400?text=No+Poster"
            alt="Poster non disponible"
          />
        ) : (
          <img src={Poster} alt={Title} />
        )}
        <p className="text-gray-500">IMDb ID: {imdbID}</p>
        <p className="text-gray-500">{Released}</p>
        <p className="text-gray-500">{Runtime}</p>

        <CategoryBadges
          mode="search"
          badgeValue="label"
          categorieOverride={categorieType}
          CATEGORIES={CATEGORIES}
        />

        <div className="w-full mt-4 flex justify-center items-center">
          <Ratings
            storageKey={imdbID ? `userRating:${imdbID}` : undefined}
            label="Votre note"
          />
        </div>

        <p className="text-gray-500">{Director}</p>
        <p className="text-gray-500">{Writer}</p>
        <p className="text-gray-500">{Actors}</p>
        <p className="text-gray-500">{Plot}</p>
        <p className="text-gray-500">{Language}</p>
        <p className="text-gray-500">{Country}</p>
        <p className="text-gray-500">{Awards}</p>
    </div>
  );
}

export default MovieCard;
