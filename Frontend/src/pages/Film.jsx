import { useParams } from "@tanstack/react-router";

function FilmDetail() {
  const { id } = useParams({ strict: false });

  return <div>🎬 Détail du film {id}</div>;
}

export default FilmDetail;