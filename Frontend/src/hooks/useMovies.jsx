import { useQuery } from "@tanstack/react-query";
import {
  searchMovies,
  getMovieById,
  getMovieByCategory,
} from "../services/omdb.service";

export function useMovies(query, page = 1) {
  return useQuery({
    queryKey: ["movies", query, page],
    queryFn: () => searchMovies(query, page),

    enabled: !!query && query.trim().length > 0, // ne lance pas si query vide
    staleTime: 1000 * 60 * 5, // cache valide 5 min
    placeholderData: (prev) => prev, // garde les données précédentes pendant le chargement
  });
}

export function useMovie(id) {
  return useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieById(id),
    enabled: !!id, // ne lance pas si id est falsy
  });
}

export function useMoviesByCategory(category, page = 1) {
  return useQuery({
    queryKey: ["movies", category, page],
    queryFn: () => getMovieByCategory(category, page),
    enabled: !!category, // ne lance pas si category est falsy
    staleTime: 1000 * 60 * 5, // cache valide 5 min
    placeholderData: (prev) => prev, // garde les données précédentes pendant le chargement
  });
}
