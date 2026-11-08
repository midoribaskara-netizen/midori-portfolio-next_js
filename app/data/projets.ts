export type Projet = {
    id: number
    slug: string
    site?: string,
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
        slug: "pokedex",
        site: "https://pokedex-pimido-gswa.onrender.com",
        titre: "Pokédex",
        resume: "API Pokedex",
        categorie: "Versionning",
        description: "Site Pokédex qui fonctionne avec une API existante permettant de faire afficher les pokémon avec filtre et affichage détaillé sur les pokémons",
        misEnAvant: true,
        image: "/images/pokédex.png",
        annee: 2026,
        tags: ["Coding digital innovation", "Groupe", "A2"]
    },
    {
        id: 2,
        slug: "inventary-dream",
        titre: "InventaryDreams",
        resume: "Projet d'Axe",
        categorie: "PHP",
        description: "Site InventaryDreams crée en A1 en projet d'axe basé sur du HTML, CSS, JS, PHP et SQL",
        misEnAvant: false,
        image: "/images/inventarydream.png",
        annee: 2026,
        tags: ["Coding digital innovation", "Seule", "A1"]
    },
    {
    id: 3,
    slug: "clash-of-cook",
    titre: "Clash Of Cook",
    resume: "Epic Digital Game",
    categorie: "HTML CSS JS",
    description : "Site conçut pour l'épic digital game pour présenter notre jeu de plateau",
    misEnAvant: false,
    image: "/images/clash of cook.png",
    annee:2026,
    tags: ["Coding digital innovation", "Groupe", "A1"]
  },
  {
    id: 4,
    slug:"carbonis",
    titre: "Carbonis",
    resume: "Projet Transversale",
    categorie: "HTML, CSS, JS",
    description : "Site conçut lors de notre projet transverale qui a pour theme l'environnement",
    misEnAvant: true,
    image: "/images/carbonis.png",
    annee:2026,
    tags: ["Coding digital innovation", "Groupe", "A1"]
  },
  {
    id: 5,
    slug: "bap",
    titre: "BAP",
    resume: "Site Collège Les Renardières",
    categorie: "Wordpress",
    description : "Site que l'ont doit concevoir pour le collège les renardieres de courbevoie avec l'équipe dev et design",
    misEnAvant: true,
    image: "/images/college.png",
    annee: 2026,
    tags: ["Coding digital innovation", "Groupe", "A2", "EN COURS"]
  },
  {
    id: 6,
    slug: "cozyp",
    titre: "Cozyp",
    resume: "Projet personnel",
    categorie: "HTML CSS JS",
    description : "Projet personnelle réaliser pour apprendre a utiliser le js",
    misEnAvant: false,
    image: "/images/cozyp.png",
    annee: 2026,
    tags: ["Coding digital innovation", "seule", "A1"]
  }
]

export function getProjet(slug: string) {
    return PROJETS.find((projet) => projet.slug === slug)
}