'use client'
 
import { useState } from 'react'
 
export default function FiltreProjets({ projets }) {
  const [tag, setTag] = useState('tous')
 
  const visibles = tag === 'tous'
    ? projets
    : projets.filter((p) => p.tags.includes(tag))
 
  return (
    <div>
      <button onClick={() => setTag('3d')}>3D</button>
      <ul>{visibles.map((p) => <li key={p.slug}>{p.titre}</li>)}</ul>
    </div>
  )
}
