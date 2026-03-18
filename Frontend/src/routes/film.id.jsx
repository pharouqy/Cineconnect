import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./__root.jsx";
import FilmDetail from "../pages/Film.jsx";

export const filmIdRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/film/$id",
  component: () => <FilmDetail />,
});
