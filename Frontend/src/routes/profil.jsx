import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./__root.jsx";
import Profil from "../pages/Profil.jsx";

export const profilRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/profil",
  component: () => <Profil />,
});
