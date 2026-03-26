import { Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

function Layout() {
  return (
    <div className="font-display">
      {/* Navbar simple pour tester la navigation */}
      <header className="bg-dark flex justify-center items-center font-display">
        <nav className="flex gap-4 p-4">
          <Link
            to="/"
            className="text-accent-500 not-pointer-none:will-change-scroll"
          >
            Accueil
          </Link>
          <Link to="/films" className="text-accent-500">
            Films
          </Link>
          <Link to="/profil" className="text-accent-500">
            Profil
          </Link>
          <Link to="/discussion" className="text-accent-500">
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
    </div>
  );
}

export default Layout;
