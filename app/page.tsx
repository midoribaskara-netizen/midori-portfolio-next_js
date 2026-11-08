import Carte from "@/components/carte"
import Hero from "@/components/hero"
import Section from "@/components/section"
import { PROJETS } from "@/lib/projets"
 
export default function Accueil() {
  return (
    <>
      <Hero
        titre="Des images, des jeux, des sites."
        texte="Atelier Brume est un studio créatif indépendant."
      />
      <Section titre="Nos projets">
        <div className="grid gap-4 sm:grid-cols-3">
          {PROJETS.map((projet) => (
            <Carte
            key={projet.id}
            titre={projet.titre}
            resume={projet.resume}
            categorie={projet.categorie}
          />
          ))}
        </div>
      </Section>
    </>
  )
}
