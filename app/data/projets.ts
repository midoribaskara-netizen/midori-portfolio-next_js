export type Projet = {
    id: number
    slug: string
    titre: string 
    resume: string
    categorie: string 
    description: string
    misEnAvant: boolean
    image: string
    annee: number
    tags: string[]
}

export const PROJETS: Projet[] = [
    {
        id: 1,
        slug: "brasserie-noue",
        titre: "Brasserie Noue",
        resume: "Identité visuelle",
        categorie: "Marque",
        description: " blablabla 1",
        misEnAvant: true,
        image: "/images/A.png",
        annee: 2026,
        tags: ["identite visuel", "design"]
    },
    {
        id: 2,
        slug: "station-oprhee",
        titre: "Station Orphée",
        resume: "Scene 3D",
        categorie: "3D",
        description: "blablabla 2",
        misEnAvant: false,
        image: "/images/B.png",
        annee: 2026,
        tags: ["identite visuel", "3D"]
    },
    {
    id: 3,
    slug: "signal-perdu",
    titre: "Signal perdu",
    resume: "Jeu d'exploration",
    categorie: "Jeu vidéo",
    description : "babla 3",
    misEnAvant: true,
    image: "/images/C.png",
    annee:2026,
    tags: ["identite visuel", "Coding"]
  },
  {
    id: 4,
    slug:"projet-quatre",
    titre: "Projet quatre",
    resume: "Description du projet",
    categorie: "3D",
    description : "babla 3",
    misEnAvant: false,
    image: "/images/D.png",
    annee:2026,
    tags: ["idneite visuel", "Market"]
  },
  {
    id: 5,
    slug: "projet-cinq",
    titre: "Projet cinq",
    resume: "Description du projet",
    categorie: "Marque",
    description : "babla 3",
    misEnAvant: false,
    image: "/images/E.png",
    annee: 2026,
    tags: ["identite visuel", "Design"]
  },
  {
    id: 6,
    slug: "projet-six",
    titre: "Projet six",
    resume: "Description du projet",
    categorie: "Jeu vidéo",
    description : "babla 3",
    misEnAvant: true,
    image: "/images/F.png",
    annee: 2026,
    tags: ["identite visuel", "3D"]
  }
]

export function getProjet(slug: string) {
    return PROJETS.find((projet) => projet.slug === slug)
}