import { notFound } from "next/navigation";
import { getProjet } from "@/lib/projets";
import BoutonJaime from "@/components/bouton-jaime";

export default async function ProjetPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projet = getProjet(slug);

  if (!projet) notFound();

  return (
    <main>
      <h1>{projet.titre}</h1>
      <p>categorie : {projet.categorie}</p>
      <p>Description : {projet.resume}</p>

      <BoutonJaime />
    </main>
  )
}