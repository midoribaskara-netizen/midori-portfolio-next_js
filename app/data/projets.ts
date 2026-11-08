export type Projet = {
    id: number
    slug: string,
    titre: string 
    resume: string
    categorie: string 
    misEnAvant: boolean
}

export const PROJETS: Projet[] = [
    {
        id: 1,
        slug: "brasserie-noue",
        titre: "Brasserie Noue",
        resume: "Identité visuelle",
        categorie: "Marque",
        misEnAvant: true 
    },
    {
        id: 2,
        slug: "station-oprhee",
        titre: "Station Orphée",
        resume: "Scene 3D",
        categorie: "3D",
        misEnAvant: false
    },
    {
    id: 3,
    slug: "signal-perdu",
    titre: "Signal perdu",
    resume: "Jeu d'exploration",
    categorie: "Jeu vidéo",
    misEnAvant: true
  },
  {
    id: 4,
    slug:"projet-quatre",
    titre: "Projet quatre",
    resume: "Description du projet",
    categorie: "3D",
    misEnAvant: false
  },
  {
    id: 5,
    slug: "projet-cinq",
    titre: "Projet cinq",
    resume: "Description du projet",
    categorie: "Marque",
    misEnAvant: false
  },
  {
    id: 6,
    slug: "projet-six",
    titre: "Projet six",
    resume: "Description du projet",
    categorie: "Jeu vidéo",
    misEnAvant: true
  }
]

export function getProjet(slug: string) {
    return PROJETS.find((projet) => projet.slug === slug)
}