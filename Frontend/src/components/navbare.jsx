import { Link } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

function Navbare({ children }) {
  return (
    <>
      {/* Navbar simple pour tester la navigation */}
      <nav className="flex gap-4 p-4">
        <Link to="/" className="text-blue-500">
          Accueil
        </Link>
        <Link to="/films" className="text-blue-500">
          Films
        </Link>
        <Link to="/profil" className="text-blue-500">
          Profil
        </Link>
        <Link to="/discussion" className="text-blue-500">
          Discussion
        </Link>
        <Link to="/film/1" className="text-blue-500">
          Film 1
        </Link>
        <Link to="/films/action" className="text-blue-500">
          Categorie 2
        </Link>
      </nav>

      {/* Les routes enfants s'affichent ici */}
      {children}

      {/* Devtools visible en bas de page (dev only) */}
      <TanStackRouterDevtools />
    </>
  );
}

export default Navbare;
