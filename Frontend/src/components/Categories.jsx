import { Link, useParams } from "@tanstack/react-router";

const CATEGORIES = [
  { label: "Films", slug: "movie" },
  { label: "Series", slug: "series" }
];

export function CategoryBadges({ searchQuery }) {
  // Récupère la catégorie active depuis l'URL (undefined si on est sur /films)
  const params = useParams({ strict: false });
  const activeSlug = params?.categorie;

  return (
    <div className="flex justify-center flex-wrap gap-2">
      {CATEGORIES.map(({ label, slug }) => {
        const isActive = activeSlug === slug;

        return (
          <Link
            key={slug}
            to={`/films/$categorie`}
            params={{ categorie: slug }}
            search={searchQuery ? { t: searchQuery } : {}}
            className={`
              px-4 py-1.5 rounded-full text-sm font-medium
              border transition-all duration-200 cursor-pointer
              ${
                isActive
                  ? "bg-blue-600 text-white border-blue-600 shadow-md scale-105"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:border-blue-400 hover:text-blue-600"
              }
            `}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
