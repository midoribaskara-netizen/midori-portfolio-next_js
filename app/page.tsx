import Carte from "@/components/carte"
import Hero from "@/components/hero"
import Section from "@/components/section"
import { PROJETS } from "@/app/data/projets"

const projetsEnAvant = PROJETS.filter((projet) => projet.misEnAvant)

export default function Accueil() {
  return (
    <>
      <Hero
        titre="Bienvenue dans mon portfolio !"
        texte="Développeuse web , découvrez mes projets qui se trouvent ci-dessous"
      />
      <Section titre="Nos projets">
        <div className="grid gap-4 sm:grid-cols-3">
          {projetsEnAvant.map((projet) => (
            <Carte
            key={projet.id}
            titre={projet.titre}
            resume={projet.resume}
            categorie={projet.categorie}
            href={projet.slug ? `/projets/${projet.slug}` : undefined}
            image={projet.image}
            annee={projet.annee}
            tags={projet.tags}
          />
          ))}
        </div>
      </Section>
    </>
  )
}
