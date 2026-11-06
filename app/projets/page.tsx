import Link from "next/link";
import { getProjets } from "@/lib/projets";

export default async function ProjetsPage() {
  const projets = await getProjets();

  return (
    <main>
      <h1>Mes projets</h1>

      {projets.map((projet) => (
        <article key={projet.slug}>
          <h2>
            <Link href={`/projets/${projet.slug}`}>
              {projet.titre}
            </Link>
          </h2>

          <p>{projet.resume}</p>
          <p>Année : {projet.annee}</p>
          <p>Technologies : {projet.tags.join(", ")}</p>
        </article>
      ))}
    </main>
  );
}