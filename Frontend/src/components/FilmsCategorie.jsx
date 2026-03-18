import { useParams } from "@tanstack/react-router";

function FilmsCategorie() {
  const { categorie } = useParams({ strict: false });

  return (
    <div>
      <h1>🎭 Catégorie : {categorie}</h1>
      <p>
        Affichage des films de la catégorie <strong>{categorie}</strong>
      </p>
    </div>
  );
}

export default FilmsCategorie;
