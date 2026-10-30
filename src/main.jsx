import React from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

function App() {
  return (
    <div className="page">
      <header><a className="brand" href="/" aria-label="EMST, accueil">emst<span aria-hidden="true">.</span></a><span className="label">Un nouveau départ</span></header>
      <main>
        <p className="eyebrow"><span aria-hidden="true" /> Bienvenue à l’EMST</p>
        <h1>Hello World<span className="period">.</span></h1>
        <p className="intro">Les belles histoires commencent<br />par un premier bonjour.</p>
        <p className="description">Le futur site de l’EMST prend vie ici.<br />Une première page, et tout reste à imaginer.</p>
        <a className="button" href="#la-suite">Et la suite <span aria-hidden="true">↗</span></a>
        <section id="la-suite" aria-labelledby="next-title"><span className="index">01 /</span><div><h2 id="next-title">Le début de l’aventure</h2><p>Notre site se construit. À bientôt pour découvrir la suite.</p></div></section>
      </main>
      <footer><span>EMST</span><span>À suivre, ensemble.</span></footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
