import { readFile } from 'node:fs/promises'
 
export type Projet = {
  slug: string; 
  titre: string; 
  resume: string
  annee: number; 
  tags: string[]; 
  image: string
}
 
export async function getProjets(): Promise<Projet[]> {
  const brut = await readFile('app/data/projets.json', 'utf-8')
  return JSON.parse(brut)
}
 
export async function getProjet(slug: string) {
  const projets = await getProjets()
  return projets.find((p) => p.slug === slug)
}
