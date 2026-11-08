export type Projet = {
    id: number
    titre: string 
    resume: string
    categorie: string 
    misEnAvant: boolean
}

export const PROJETS: Projet[] = [
    {
        id: 1,
        titre: "Brasserie Noue",
        resume: "Identité visuelle",
        categorie: "Marque",
        misEnAvant: true 
    },
    {
        id: 2,
        titre: "Station Orphée",
        resume: "Scene 3D",
        categorie: "3D",
        misEnAvant: false
    },
    {
    id: 3,
    titre: "Signal perdu",
    resume: "Jeu d'exploration",
    categorie: "Jeu vidéo",
    misEnAvant: true
  },
  {
    id: 4,
    titre: "Projet quatre",
    resume: "Description du projet",
    categorie: "3D",
    misEnAvant: false
  },
  {
    id: 5,
    titre: "Projet cinq",
    resume: "Description du projet",
    categorie: "Marque",
    misEnAvant: false
  },
  {
    id: 6,
    titre: "Projet six",
    resume: "Description du projet",
    categorie: "Jeu vidéo",
    misEnAvant: true
  }
]