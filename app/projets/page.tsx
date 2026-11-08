import FiltreProjets from "@/components/filtre-projets";
import { PROJETS } from "@/app/data/projets";

export default function ProjetsPage() {
  return (
    <section>
      <h1>Mes projets</h1>
      <FiltreProjets projets={PROJETS} />


    </section>
  );
}