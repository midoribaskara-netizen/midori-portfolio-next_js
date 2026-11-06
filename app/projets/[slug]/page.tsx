import { notFound } from "next/navigation";
import { getProjet } from "@/lib/projets";

export default async function ProjetPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projet = await getProjet(slug);

  if (!projet) notFound();

  return (
    <main>
      <h1>{projet.titre}</h1>
      <p>{projet.resume}</p>
      <p>Année : {projet.annee}</p>
      <p>Technologies : {projet.tags.join(", ")}</p>
    </main>
  );
}