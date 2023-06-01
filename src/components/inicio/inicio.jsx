import React from 'react'
import './inicio.css'
import { Carousel } from 'react-bootstrap';
import termotanque from "../images/termotanque.jpeg"
import slide1 from '../images/slide1.jpg'
import slide2 from '../images/slide2.jpg'
import panelfoto from '../images/panelesfoto1.jpg'

export default function inicio() {
    return (
        <section className='inicio'>
            <div className='titulo'>
                <h1 className='titulo-principal'>Bienvenidos</h1>
                <h3 className='subtitulo'>Pampa Alta Solar</h3>
            </div>
            <Carousel interval={2000}>
                <Carousel.Item>
                    <img className="slide1" src={slide1} alt="Slide 1" />
                    <Carousel.Caption>
                        <p>Descubre el poder de la energía solar.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="slide1" src={slide2} alt="Slide 2" />
                    <Carousel.Caption>
                        <p>Genera tu propia electricidad renovable y ahorra en costos de energía a largo plazo</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="slide3" src={termotanque} alt="Slide 3" />
                    <Carousel.Caption>
                        <p>Disfruta de agua caliente en tu hogar mientras reduces tu consumo de energía convencional y ahorras dinero</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className='segundo'>
                <div className='contenido'>
                    <div className='imagen'>
                        <img src={panelfoto} alt="paneles" />
                    </div>
                    <div className='texto'>
                        <p className='infoPaneles'>
                            Descubre el potencial de la energía solar y las soluciones sostenibles para un futuro más brillante.
                            En nuestra página, te invitamos a explorar el fascinante mundo de la energía solar y las tecnologías renovables que están transformando la forma en que obtenemos y utilizamos la energía.
                        </p>
                    </div>
                </div>
            </div>

        </section >
    )
}

