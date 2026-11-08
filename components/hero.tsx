import Bouton from "@/components/bouton"
 
type Props = {
  titre: string
  texte: string
}
 
export default function Hero({ titre, texte }: Props) {
  return (
    <div className="py-16 text-center">
      <h1 className="mx-auto max-w-xl text-4xl font-semibold">{titre}</h1>
      <p className="mx-auto mt-4 max-w-lg text-neutral-600">{texte}</p>
      <div className="mt-8">
        <Bouton label="Voir les projets" href="/projets" />
      </div>
    </div>
  )
}
