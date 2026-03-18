import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./__root.jsx";

export const profilRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/profil",
  component: () => <h1>👤 Mon Profil</h1>,
});
