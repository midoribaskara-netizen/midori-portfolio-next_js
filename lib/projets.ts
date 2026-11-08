export type Projet = {
  id: number
  slug: string
  titre: string
  resume: string
  categorie: string
  annee: number 
  tags: string[]
}

export const PROJETS: Projet[] = [
  { 
    id: 1, 
    slug: "brasserie-noue",
    titre: "Brasserie Noue", 
    resume: "Identité visuelle", 
    categorie: "Marque" ,
    annee: 2026,
    tags: ["Identité visuelle", "Design"]
  },
  { 
    id: 2, 
    slug: "station-oprhée",
    titre: "Station Orphée",
    resume: "Scène 3D", 
    categorie: "3D",
    annee:2025,
    tags: ["3D"]
  },
  { 
    id: 3,
    slug: "signal-perdu",
    titre: "Signal perdu", 
    resume: "Jeu d'exploration", 
    categorie: "Jeu vidéo",
    annee: 2024,
    tags: ["Jeu video"]
  },
]

export function getProjet(slug: string) {
  return PROJETS.find((projet) => projet.slug === slug)
}