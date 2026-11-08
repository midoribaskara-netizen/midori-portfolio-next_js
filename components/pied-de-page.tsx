const annee = new Date().getFullYear()
 
export default function PiedDePage() {
  return (
    <footer className="mt-16 border-t border-neutral-200 py-8 text-sm">
      <p> Mon Portfolio - Midori Baskara  - {annee}</p>
    </footer>
  )
}
