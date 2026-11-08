'use client'
 
import { useState } from 'react'
import type { Projet } from '@/app/data/projets'
import Carte from "@/components/carte"
 
export default function FiltreProjets({ projets }: { projets: Projet[] }) {
  const [tag, setTag] = useState("tous")
 
  const visibles = tag === "tous"
    ? projets
    : projets.filter((p) => p.tags.includes(tag))
 
  return (
    <>
      <div className="mb-4 flex gap-2">
        <button onClick={() => setTag("tous")}>Tous</button>
        <button onClick={() => setTag('Créa Design')}>Créa Design</button>
        <button onClick={() => setTag('Coding digital innovation')}>CDI</button>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {visibles.map((projet) =>(
          <div key={projet.id}>
            {projet.misEnAvant && <span>recent</span>}

          <Carte
            titre={projet.titre}
            resume={projet.resume}
            categorie={projet.categorie}
            href={projet.slug ? `/projets/${projet.slug}` : undefined}
            image={projet.image}
            annee={projet.annee}
            tags={projet.tags}
          />
        </div>
        ))}
      </div>
    </>
  )
}
