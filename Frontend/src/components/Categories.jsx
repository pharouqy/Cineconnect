import { Link, useParams, useSearch } from "@tanstack/react-router";

export function CategoryBadges({
  // Mode par défaut : badge "type" (films/series) qui met à jour params.categorie
  mode = "categorie", // "categorie" | "search"
  // Dans mode="categorie" : garde la query actuelle (t=<searchQuery>) en changeant de catégorie.
  searchQuery,
  // Dans mode="search" : utilise la valeur du badge pour remplir la query t.
  // Si badgeValue="label", on met t=<label>. Sinon t=<slug>.
  badgeValue = "slug", // "label" | "slug"
  categorieOverride,
  CATEGORIES = [
    { label: "Films", slug: "movie" },
    { label: "Series", slug: "series" },
  ],
}) {
  const params = useParams({ strict: false });
  const activeSlug = params?.categorie;

  const search = useSearch({ strict: false });
  const activeT = (search?.t || "").toString();

  const getBadgeValue = ({ label, slug }) =>
    badgeValue === "label" ? label : slug;

  const isActive = ({ slug, label }) => {
    if (mode === "search") {
      const value = getBadgeValue({ slug, label });
      return activeT.toLowerCase() === value.toLowerCase();
    }
    // mode="categorie"
    return activeSlug === slug;
  };

  return (
    <div className="flex justify-center flex-wrap gap-2">
      {CATEGORIES.map(({ label, slug }) => {
        const active = isActive({ slug, label });
        const categorieParam = categorieOverride || slug;

        const searchForBadge =
          mode === "search"
            ? { t: getBadgeValue({ label, slug }) }
            : searchQuery
              ? { t: searchQuery }
              : {};

        return (
          <Link
            key={slug}
            to={`/films/$categorie`}
            params={{ categorie: categorieParam }}
            search={searchForBadge}
            className={`
              px-4 py-1.5 rounded-full text-sm font-medium
              border transition-all duration-200 cursor-pointer
              ${
                active
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
