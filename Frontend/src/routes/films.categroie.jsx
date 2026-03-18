import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./__root.jsx";
import FilmsCategorie from "../components/FilmsCategorie.jsx";

export const filmscategorieRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/films/$categorie",
  component: FilmsCategorie,
});
