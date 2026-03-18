import { Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

function Layout() {
  return (
    <>
      {/* Navbar simple pour tester la navigation */}
      <header className="bg-gray-800 flex justify-center items-center">
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
        </nav>
      </header>
      <section className="p-4 min-h-screen bg-gray-100 flex flex-col items-center">
        {/* Les routes enfants s'affichent ici */}
        <Outlet />
      </section>
      {/* Devtools visible en bas de page (dev only) */}
      <TanStackRouterDevtools />
    </>
  );
}

export default Layout;
