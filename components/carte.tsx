import Image from "next/image"
import Link from "next/link"
import BoutonJaime from "@/components/bouton-jaime"
import Etiquette from "@/components/etiquette"
 
type Props = {
  titre: string
  resume: string
  categorie: string
  href?: string
  image: string
  annee: number
  tags: string[]
}
 
export default function Carte({ titre, resume, categorie, href, image, annee, tags }: Props) {
  return (
    <article className="rounded-lg border border-neutral-200 p-5">
        <Image
            src={image}
            alt={titre}
            width={400}
            height={250}
            className= "mb-4 rounded-lg"
        />

        <p className="text-xs uppercase text-neutral-500">{categorie}</p>

        <h3 className="mt-1 font-semibold">
            {href ? <Link href={href}>{titre}</Link>: titre }
        </h3>

        <p className="mt-2 text-sm text-neutral-600">{resume}</p>
        <p className="mt-2 text-sm">{annee}</p>

        <div className="mt-2 flex flex-wrap gap-2">
            {tags.map((tag) => (
                <Etiquette key={tag} texte={tag} />
            ))}
        </div>

        <div className="mt-4">
        <BoutonJaime />
      </div>
    </article>
  )
}
