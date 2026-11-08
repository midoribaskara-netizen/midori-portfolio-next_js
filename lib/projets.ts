export type Projet = {
  id: number
  titre: string
  resume: string
  categorie: string
}

export const PROJETS: Projet[] = [
  { id: 1, titre: "Brasserie Noue", resume: "Identité visuelle", categorie: "Marque" },
  { id: 2, titre: "Station Orphée", resume: "Scène 3D", categorie: "3D" },
  { id: 3, titre: "Signal perdu", resume: "Jeu d'exploration", categorie: "Jeu vidéo" },
]