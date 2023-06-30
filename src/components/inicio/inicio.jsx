import React from 'react'
import './inicio.css'
import { Carousel } from 'react-bootstrap';

export default function inicio() {
    return (
        <section className='inicio'>
            <div className='titulo'>
                <h1 className='titulo-principal'>Bienvenidos</h1>
                <h3 className='subtitulo'>Pampa Alta Solar</h3>
            </div>
            <Carousel interval={2000}>
                <Carousel.Item>
                    <img className="slide1" src="https://i.imgur.com/UF6dzRl.jpg" alt="Slide 1" />
                    <Carousel.Caption>
                        <p className='texto1'>Descubre el poder de la energía solar.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="slide2" src="https://i.imgur.com/Q9N8wOt.jpg" alt="Slide 2" />
                    <Carousel.Caption>
                        <p className='texto1'>Genera tu propia electricidad renovable y ahorra en costos de energía a largo plazo</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="slide3" src="https://i.imgur.com/VUnMjvq.jpg" alt="Slide 3" />
                    <Carousel.Caption>
                        <p className='texto1'>Disfruta de agua caliente en tu hogar mientras reduces tu consumo de energía convencional y ahorras dinero</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <a href="https://api.whatsapp.com/send?phone=3516803734" target="_blank" className="whatsapp-float">
                <img className='imgWhats' src="https://i.imgur.com/NQEJITk.png" alt="WhatsApp" />
            </a>

            <div className='segundo'>
                <div className='contenido'>
                    <div className='imagen'>
                        <img src="https://i.imgur.com/zJiudS1.jpg" alt="paneles" />
                    </div>
                    <div className='texto'>
                        <p className='infoPaneles'>
                            Descubre el potencial de la energía solar y las soluciones sostenibles para un futuro más brillante.
                            En nuestra página, te invitamos a explorar el fascinante mundo de la energía solar y las tecnologías renovables que están transformando la forma en que obtenemos y utilizamos la energía.
                        </p>
                    </div>
                </div>
            </div>
            <div className='segundo'>
                <div className='contenido'>
                    <div className='texto'>
                        <p className='infoPaneles'>
                            Al instalar paneles solares, generas tu propia electricidad de forma gratuita. Esto se traduce en un ahorro significativo en tus facturas de electricidad a largo plazo. Al reducir tu dependencia de fuentes convencionales, te beneficias económicamente y mantienes estabilidad en tus costos energéticos.

                        </p>
                    </div>
                    <div className='imagen'>
                        <img src="https://i.imgur.com/2Qtxvkt.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className='energiaSolar'>
                <h2 className='queEs'>Una Elección Inteligente para tu Hogar</h2>
                <p className='energiaSolarInfo'>
                    La energía solar es una opción inteligente para tu hogar por varias razones:
                    <br /><br />
                    Ahorro en costos de energía: Reduce tus gastos mensuales de electricidad y toma el control de tus costos energéticos.
                    <br /><br />
                    Sostenibilidad ambiental: Contribuye a la protección del medio ambiente al utilizar una fuente de energía limpia y renovable.
                    <br /><br />
                    Independencia energética: Disfruta de electricidad confiable incluso en áreas remotas y durante cortes de energía.
                    <br /><br />
                    Valorización de tu hogar: Aumenta el valor de tu propiedad al incorporar sistemas de energía solar.
                    <br /><br />
                    Durabilidad y bajo mantenimiento: Los paneles solares son resistentes y requieren poco mantenimiento a lo largo de su vida útil.
                    <br /><br />
                    Compromiso con un futuro sostenible: Tu elección de energía solar tiene un impacto positivo en la reducción de emisiones y en la preservación del medio ambiente.
                    <br /><br />
                    Aprovecha los beneficios de la energía solar y descubre una forma más rentable y sostenible de obtener energía para tu hogar.
                </p>
            </div>

        </section >
    )
}

