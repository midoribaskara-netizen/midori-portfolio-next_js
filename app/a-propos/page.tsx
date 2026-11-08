import Accordeon from "@/components/accordeon"

export default function AProposPage() {
  return (
    <section>
      <h1>À propos</h1>
      <p>Étudiant en A2 à l'IIM, spécialisé en développement web.</p>

      <section className="py-10">
        <h2 className="mb-6 text-2xl font-semibold">
          Questions fréquentes sur moi
        </h2>

        <Accordeon question="Quels sont mes objectifs professionnels ?">
          Travailler dans le  monde du numérique en cyber ou en web design.
        </Accordeon>

        <Accordeon question="Quels langages de programmation je connais ?">
          HTML, CSS, JS, PHP, Python, Java et SQL.
        </Accordeon>

        <Accordeon question="Quels sont mes centres d'interet ?">
          J'aime le developpement web, le dessin, la musique et les jeux vidéos.
        </Accordeon>
      </section>
    </section>
  )
}
