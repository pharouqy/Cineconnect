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

export function useMoviesByCategory(category, query, page = 1) {
  return useQuery({
    queryKey: ["movies", category, query, page],
    queryFn: () => getMovieByCategory(category, query, page),
    enabled: !!category && !!query && query.trim().length > 0, // ne lance pas si category ou query est vide
    staleTime: 1000 * 60 * 5, // cache valide 5 min
    placeholderData: (prev) => prev, // garde les données précédentes pendant le chargement
  });
}
