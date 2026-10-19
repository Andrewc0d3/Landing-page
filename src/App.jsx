import './App.css'

function App() {

  return (
    <>
      <section id="header-section">
        <header>
          <a href="#"><img src="logo.png" alt="logo" className='logo' /></a>
          <nav>
            <a href="https://digimonreactapi.netlify.app/">Descargar DigiApp</a>
          </nav>
        </header>
      </section>

      <section id="hero-section">
        <div className="hero-container">
          <h1>DigiApp</h1>
          <h2>Toda la base de datos del DigiMundo, organizada en la palma de tu mano.</h2>
          <a href="https://digimonreactapi.netlify.app/" id='btn-cta-principal'>Descargar DigiApp Gratis</a>
        </div>
      </section>

      <section id="beneficios">
        <div className='beneficios-container'>
          <h2 className='titulo-beneficios'>Toda la información que necesitas, al instante y sin distracciones.</h2>
          <div className='beneficios'>
            <img src="" alt="" />
            <p>
              <img src="https://cdn-icons-png.flaticon.com/512/8270/8270486.png" alt="lista" className='img-benef' />
              <h2 className='beneficio'>Catálogo Completo.</h2>
              Explora el listado de criaturas con su imagen oficial y su nivel evolutivo exacto.
            </p>
            <p>
              <img src="https://cdn-icons-png.flaticon.com/512/18642/18642436.png" alt="corazon" className='img-benef' />
              <h2 className='beneficio'>Desafío de Trivia.</h2>
              Pon a prueba tus conocimientos adivinando si cada Digimon es In-Training, Champion u Ultimate.
            </p>
            <p>
              <img src="https://cdn-icons-png.flaticon.com/512/5726/5726470.png" alt="corazon" className='img-benef' />
              <h2 className='beneficio'>Colección de Favoritos.</h2>
              Guarda a tus compañeros preferidos con un solo toque para acceder a ellos rápidamente.
            </p>
          </div>
        </div>
      </section>

    </>
  )
}

export default App
