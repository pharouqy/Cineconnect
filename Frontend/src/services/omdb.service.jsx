const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_OMDB_BASE_URL;

// Recherche de films par mot-clé avec pagination
export async function searchMovies(query, page = 1) {
  if (!query || query.trim() === "") {
    throw new Error("Le terme de recherche est requis");
  }

  const url = `${BASE_URL}/?s=${encodeURIComponent(query)}&page=${page}&apikey=${API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Erreur HTTP : ${response.status}`);
  }

  const data = await response.json();

  // OMDb retourne { Response: "False", Error: "..." } en cas d'échec
  if (data.Response === "False") {
    throw new Error(data.Error || "Aucun résultat trouvé");
  }

  return {
    movies: data.Search, // tableau de films
    totalResults: Number(data.totalResults),
    page,
  };
}

// Récupérer le détail d'un film par son ID IMDb
export async function getMovieById(id) {
  if (!id) throw new Error("ID du film requis");

  const url = `${BASE_URL}/?i=${id}&plot=full&apikey=${API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Erreur HTTP : ${response.status}`);
  }

  const data = await response.json();

  if (data.Response === "False") {
    throw new Error(data.Error || "Film introuvable");
  }

  return data;
}

export async function getMovieByCategory(category, page = 1) {
  if (!category) throw new Error("Catégorie requise");

  const url = `${BASE_URL}/?type=${category}&page=${page}&apikey=${API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Erreur HTTP : ${response.status}`);
  }

  const data = await response.json();

  if (data.Response === "False") {
    throw new Error(data.Error || "Film introuvable");
  }

  return {
    movies: data.Search, // tableau de films
    totalResults: Number(data.totalResults),
    page,
  };
}
