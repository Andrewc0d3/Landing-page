import { useState } from 'react'
import './App.css'

function App() {
  const [faqAbierta, setFaqAbierta] = useState(null)

  const toggleFaq = (index) => {
    if (faqAbierta === index) {
      setFaqAbierta(null)
    } else {
      setFaqAbierta(index)
    }
  }

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
              <img src="https://cdn-icons-png.flaticon.com/512/5726/5726470.png" alt="corazon" className='img-benef' />
              <h2 className='beneficio'>Desafío de Trivia.</h2>
              Pon a prueba tus conocimientos adivinando si cada Digimon es In-Training, Champion u Ultimate.
            </p>
            <p>
              <img src="https://cdn-icons-png.flaticon.com/512/753/753252.png" alt="corazon" className='img-benef' />
              <h2 className='beneficio'>Colección de Favoritos.</h2>
              Guarda a tus compañeros preferidos con un solo toque para acceder a ellos rápidamente.
            </p>
          </div>
        </div>
      </section>

      <section id="cta">
        <div className="cta-container">
          <h2 className="titulo-cta">Empieza tu viaje y únete a la comunidad</h2>
          <a href="https://digimonreactapi.netlify.app/" className="btn-cta">Unirme a los elegidos</a>
        </div>
      </section>

      <section id="explicacion">
        <div className="explicacion-container">
          <h2 className="titulo-explicacion">¿Cómo funciona DigiApp?</h2>
          <div className="explicacion">
            <p>
              <img src="https://cdn-icons-png.flaticon.com/512/1426/1426281.png" alt="buscar" className="img-explicacion" />
              <h2 className="paso-explicacion">1. Explora el DigiMundo</h2>
              Navega fácilmente por la base de datos completa con imágenes.
            </p>
            <p>
              <img src="https://cdn-icons-png.flaticon.com/512/13728/13728197.png" alt="nivel" className="img-explicacion" />
              <h2 className="paso-explicacion">2. Conoce sus Niveles</h2>
              Identifica sus niveles de evolución desde Fresh hasta Mega sin complicaciones.
            </p>
            <p>
              <img src="https://cdn-icons-png.flaticon.com/512/753/753252.png" alt="guardar" className="img-explicacion" />
              <h2 className="paso-explicacion">3. Organiza tu Equipo</h2>
              Guarda tus compañeros preferidos en tu lista personalizada para tenerlos siempre disponibles.
            </p>
          </div>
        </div>
      </section>

      <section id="testimonios">
        <div className="testimonios-container">
          <h2 className="titulo-testimonios">Lo que dicen los elegidos</h2>
          <div className="testimonios">
            <div className="testimonio-card">
              <img src="https://images.pexels.com/photos/3936894/pexels-photo-3936894.jpeg?auto=compress&w=1260&h=750&dpr=1" alt="foto-usuario" className="img-testimonio" />
              <h3 className="nombre-testimonio">María Dolores</h3>
              <p className="texto-testimonio">"Increíble aplicación. Pude consultar los niveles de evolución de Agumon al instante antes de cada batalla."</p>
            </div>
            <div className="testimonio-card">
              <img src="https://images.pexels.com/photos/12743212/pexels-photo-12743212.jpeg?auto=compress&w=1260&h=750&dpr=1" alt="foto-usuario" className="img-testimonio" />
              <h3 className="nombre-testimonio">Hugo Saez</h3>
              <p className="texto-testimonio">"Me encanta lo ordenada que está la información y lo fácil que es guardar a mis favoritos."</p>
            </div>
            <div className="testimonio-card">
              <img src="https://images.pexels.com/photos/40247492/pexels-photo-40247492/free-photo-of-retrato-de-un-hombre-pensativo-en-blanco-y-negro.jpeg?auto=compress&w=1260&h=750&dpr=1" alt="foto-usuario" className="img-testimonio" />
              <h3 className="nombre-testimonio">Gabriel Ramirez</h3>
              <p className="texto-testimonio">"Procesamiento de datos eficiente. Como analista, aprecio la rapidez de respuesta del catálogo."</p>

            </div>
            <div className="testimonio-card">
              <img src="https://images.pexels.com/photos/39849151/pexels-photo-39849151/free-photo-of-un-perrito-pequeno-y-comodo-se-relaja-sobre-una-manta-blanca.jpeg?auto=compress&w=1260&h=750&dpr=1" alt="foto-usuario" className="img-testimonio" />
              <h3 className="nombre-testimonio">Claudia Montero</h3>
              <p className="texto-testimonio">"¡La sección de trivias es súper divertida! Siempre pongo a prueba a mis amigos."</p>
            </div>
            <div className="testimonio-card">
              <img src="https://images.pexels.com/photos/40268447/pexels-photo-40268447/free-photo-of-dramatico-retrato-en-blanco-y-negro-de-un-hombre.jpeg?auto=compress&w=1260&h=750&dpr=1" alt="foto-usuario" className="img-testimonio" />
              <h3 className="nombre-testimonio">Javier Flores</h3>
              <p className="texto-testimonio">"Sencilla, práctica y al grano. Tiene todo lo que necesitas sin rodeos."</p>
            </div>
          </div>
        </div>
      </section>

      <section id="cta-2">
        <div className="cta-2-container">
          <h2 className="titulo-cta-2">¿Qué tan lejos llegará tu compañero digital?</h2>
          <a href="https://digimonreactapi.netlify.app/" className="btn-cta-2">Descubrir criaturas ahora</a>
        </div>
      </section>

      <section id="faq">
        <div className="faq-container">
          <h2 className="titulo-faq">Preguntas Frecuentes</h2>
          <div className="faq-lista">

            <div className="faq-item">
              <button className="faq-pregunta" onClick={() => toggleFaq(0)}>
                <span>¿La aplicación tiene algún costo o compras integradas?</span>
                <span className="faq-icono">{faqAbierta === 0 ? '-' : '+'}</span>
              </button>
              {faqAbierta === 0 && (
                <div className="faq-respuesta">
                  <p>No, DigiApp es completamente gratis y no contiene compras integradas.</p>
                </div>
              )}
            </div>

            <div className="faq-item">
              <button className="faq-pregunta" onClick={() => toggleFaq(1)}>
                <span>¿Puedo consultar la base de datos si no tengo conexión a internet?</span>
                <span className="faq-icono">{faqAbierta === 1 ? '-' : '+'}</span>
              </button>
              {faqAbierta === 1 && (
                <div className="faq-respuesta">
                  <p>No, requiere conexión a internet para consultar la información y sincronizar los datos en tiempo real.</p>
                </div>
              )}
            </div>

            <div className="faq-item">
              <button className="faq-pregunta" onClick={() => toggleFaq(2)}>
                <span>¿Cómo guardo a mis Digimon preferidos en la lista de Favoritos?</span>
                <span className="faq-icono">{faqAbierta === 2 ? '-' : '+'}</span>
              </button>
              {faqAbierta === 2 && (
                <div className="faq-respuesta">
                  <p>Simplemente presiona el ícono de corazón que aparece junto a cada criatura para añadirla automáticamente a tu lista de Favoritos.</p>
                </div>
              )}
            </div>

            <div className="faq-item">
              <button className="faq-pregunta" onClick={() => toggleFaq(3)}>
                <span>¿En qué dispositivos puedo instalar la app y con qué frecuencia se actualiza?</span>
                <span className="faq-icono">{faqAbierta === 3 ? '-' : '+'}</span>
              </button>
              {faqAbierta === 3 && (
                <div className="faq-respuesta">
                  <p>DigiApp es una PWA (Progressive Web App), por lo que puedes instalarla en cualquier dispositivo móvil o de escritorio sin importar el sistema operativo, recibiendo actualizaciones instantáneas sin descargas adicionales.</p>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      <section id="pre-footer">
        <div className="pre-footer-container">
          <h2 className="titulo-pre-footer">Origen de la Información</h2>
          <p className="texto-pre-footer">
            Toda la información y datos de las criaturas mostradas en esta aplicación fueron obtenidos a través de la API pública:
          </p>
          <a href="https://digimon-api.vercel.app/api/digimon" target="_blank" rel="noopener noreferrer" className="link-api">
            https://digimon-api.vercel.app/api/digimon
          </a>
        </div>
      </section>

      <footer id="footer">
        <div className="footer-container">
          <div className="footer-contenido">
            <div className="footer-columna">
              <h3 className="footer-titulo">Navegación</h3>
              <ul className="footer-lista">
                <li><a href="#hero-section">Inicio</a></li>
                <li><a href="#beneficios">Beneficios</a></li>
                <li><a href="#explicacion">¿Cómo funciona?</a></li>
                <li><a href="#testimonios">Testimonios</a></li>
              </ul>
            </div>

            <div className="footer-columna">
              <h3 className="footer-titulo">Soporte</h3>
              <ul className="footer-lista">
                <li><a href="#faq">Preguntas Frecuentes</a></li>
                <li><a href="#pre-footer">Origen de Datos</a></li>
              </ul>
            </div>

            <div className="footer-columna">
              <h3 className="footer-titulo">Comunidad</h3>
              <ul className="footer-lista">
                <li><a href="#cta">Únete</a></li>
                <li><a href="#cta-2">Explorar</a></li>
              </ul>
            </div>

            <div className="footer-columna footer-redes">
              <a href="#" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.65 13.75 5.65c1.08 0 2.22.19 2.22.19v2.44h-1.25c-1.23 0-1.62.77-1.62 1.56V12h2.77l-.44 3h-2.33v6.8c4.56-.93 8-4.96 8-9.8z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" aria-label="X (Twitter)">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright">&copy; {new Date().getFullYear()} DigiApp. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
