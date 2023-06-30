import React from 'react'
import './Instalacion.css'



export default function Instalacion() {
    return (
        <div className='Instalacion'>
            <h1 className='tituloInstalacion'>Servicios de Instalacion</h1>
            <div className='textoImagen'>
                <img src="https://i.imgur.com/lStOxkN.jpg" alt='Imagen Instalacion' className='imagenInstalacion' />
                <p className='parrafoInstalacion'>
                Somos una empresa especializada en la venta e instalación de paneles solares, baterías de litio, termotanques, inversores, climatizadores de piletas y bombas. Ofrecemos soluciones completas a nuestros clientes, encargándonos de todo el proceso, desde la planificación hasta la instalación final. Contamos con una amplia experiencia en energía renovable y nuestro equipo altamente capacitado diseña proyectos personalizados para satisfacer las necesidades de cada cliente. Garantizamos instalaciones seguras, eficientes y de alta calidad. Nuestro objetivo es proporcionar sistemas duraderos y confiables que optimicen el consumo de energía y reduzcan el impacto ambiental. Ofrecemos asesoramiento y una instalación profesional para sistemas solares, baterías de litio y equipos de climatización. En nuestra empresa, los proyectos son llave en mano, con garantía, experiencia y personalización. Promovemos la energía renovable y brindamos soluciones de calidad para aprovechar al máximo su potencial. ¡Contáctenos hoy mismo y comience su transición hacia una energía más limpia y sostenible!
                </p>
            </div>
            <a href="https://api.whatsapp.com/send?phone=3516803734" target="_blank" className="whatsapp-float">
                <img className='imgWhats' src="https://i.imgur.com/NQEJITk.png" alt="WhatsApp" />
            </a>
            <section className='trabajo'>
                <div className='carouselTitulo'>
                    <h1 className='tituloTrabajos'>
                        Trabajos Realizados
                    </h1>
                </div>
                <div className='trabajosRea'>
                    <div className='imageDiv'>

                        <img src="https://i.imgur.com/qBguARY.jpg" alt="Imagen 1" />
                    </div>
                    <div className='imageDiv'>
                        <img src="https://i.imgur.com/n7LOWXG.jpg" alt="Imagen 4" />
                    </div>
                    <div className='imageDiv'>
                        <img src="https://i.imgur.com/lStOxkN.jpg" alt="Imagen 6" />
                    </div>
                    <div className='imageDiv1'>
                        <p className='parrafoTrabajo'>
                            Comenzamos evaluando cuidadosamente la ubicación y el entorno para determinar la mejor orientación y ángulo de inclinación de los paneles solares. Esto nos permite maximizar la captación de la luz solar y garantizar una producción de energía eficiente.
                            Una vez finalizada la instalación, realizamos pruebas exhaustivas y comprobamos que el sistema funcione de manera adecuada.
                        </p>
                    </div>
                    <div className='imageDiv1'>
                        <p className='parrafoTrabajo'>
                            Los inversores desempeñan un papel crucial al convertir la energía generada por los paneles solares en corriente alterna (CA), que es la forma de electricidad utilizada en los hogares y negocios. Nuestro equipo de expertos selecciona cuidadosamente los inversores más avanzados y confiables en el mercado para asegurar un rendimiento óptimo de tu sistema.
                        </p>
                    </div>

                    <div className='imageDiv'>
                        <img src="https://i.imgur.com/nna8Pey.jpg" alt="Imagen 3" />
                        <p className='parrafoTrabajo'>Descripción del trabajo 1</p>
                    </div>
                    <div className='imageDiv'>
                        <img src="https://i.imgur.com/6IB2gWQ.jpg" alt="Imagen 5" />
                    </div>
                    <div className='imageDiv'>
                        <img src="https://i.imgur.com/8nyVbCV.jpg" alt="Imagen 9" />
                    </div>
                    <div className='imageDiv'>

                        <img src="https://i.imgur.com/6tbRoaM.jpg" alt="Imagen 2" />
                    </div>
                    <div className='imageDiv'>
                        <img src="https://i.imgur.com/4PHqyoo.jpg" alt="Imagen 7" />
                    </div>
                    <div className='imageDiv'>
                        <img src="https://i.imgur.com/KUQUf8e.jpg" alt="Imagen 6" />
                    </div>
                    <div className='imageDiv'>

                        <img src="https://i.imgur.com/sNBjOWJ.jpg" alt="Imagen 10" />
                    </div>
                    <div className='imageDiv'>
                        <img src="https://i.imgur.com/1tOoEVQ.jpg" alt="Imagen 11" />
                    </div>
                    <div className='imageDiv'>
                        <img src="https://i.imgur.com/GEYva11.jpg" alt="Imagen 12" />
                    </div>
                    <div className='imageDiv'>

                        <img src="https://i.imgur.com/P1WDFS4.jpg" alt="Imagen 13" />
                    </div>
                    <div className='imageDiv'>
                        <img src="https://i.imgur.com/D4m9VhN.jpg" alt="Imagen 14" />
                    </div>
                    <div className='imageDiv'>
                        <img src="https://i.imgur.com/80V0vg9.jpg" alt="Imagen 15" />
                    </div>
                    <div className='imageDiv'>

                        <img src="https://i.imgur.com/DPhdPgV.jpg" alt="Imagen 16" />
                    </div>
                    <div className='imageDiv'>
                        <img src="https://i.imgur.com/eNLhR4U.jpg" alt="Imagen 17" />
                    </div>
                    <div className='imageDiv'>
                        <img src="https://i.imgur.com/1LhNJ20.jpg" alt="Imagen 18" />
                    </div>
                </div>


            </section>
        </div>
    );
}

