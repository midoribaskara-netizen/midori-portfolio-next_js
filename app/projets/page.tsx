import Carte from "@/components/carte";
import { PROJETS } from "@/app/data/projets";

export default function ProjetsPage() {
  return (
    <main>
      <h1>Mes projets</h1>

      <div className="grid gap-4 sm:grid-cols-3">
        {PROJETS.map((projet) => (
          <div key={projet.id}>
            {projet.misEnAvant && <span>En vedette</span>}

            <Carte
              titre={projet.titre}
              resume={projet.resume}
              categorie={projet.categorie}
            />
          </div>
        ))}
      </div>
    </main>
  );
}