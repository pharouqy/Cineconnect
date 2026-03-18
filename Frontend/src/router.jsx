import { createRouter } from "@tanstack/react-router";

// Import toutes les routes
import { rootRoute } from "./routes/__root.jsx";
import { indexRoute } from "./routes/index.jsx";
import { filmsRoute } from "./routes/films.jsx";
import { filmscategorieRoute } from "./routes/films.categroie.jsx";
import { filmIdRoute } from "./routes/film.id.jsx";
import { profilRoute } from "./routes/profil.jsx";
import { discussionRoute } from "./routes/discussion.jsx";

// Arbre des routes
const routeTree = rootRoute.addChildren([
  indexRoute,
  filmsRoute,
  filmscategorieRoute,
  filmIdRoute,
  profilRoute,
  discussionRoute,
]);

// Création du router
export const router = createRouter({ routeTree });
