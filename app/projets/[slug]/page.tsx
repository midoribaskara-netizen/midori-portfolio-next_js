import { notFound } from "next/navigation";
import { PROJETS } from "@/app/data/projets";
import BoutonJaime from "@/components/bouton-jaime";
import Bouton from "@/components/bouton";

export default async function ProjetPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projet = PROJETS.find((p) => p.slug === slug);

  if (!projet) notFound();

    return (
    <article className="py-12">
      <p className="text-xs uppercase text-neutral-500">{projet.categorie}</p>
      <h1 className="mt-2 text-4xl font-semibold">{projet.titre}</h1>
      <p className="mt-6 max-w-xl text-neutral-600">{projet.description}</p>
      <div className="mt-8 flex gap-4">
        <BoutonJaime />
        <Bouton label="Tous les projets" href="/projets" variante="contour" />
      </div>
    </article>
  )
}
