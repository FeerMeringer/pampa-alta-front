import React from 'react'
import './inicio.css'
import inversor from "../images/inversor.jpeg"
import bateria from "../images/bateria.jpg"
import termotanque from "../images/termotanque.jpeg"
import climatizador from "../images/climatizador.jpeg"

export default function inicio() {
  return (
    <section>
    <div className='solar'>
        <div className='titulo'>
        <h1>Bienvenidos</h1>
        <h3> Pampa Alta Energia Solar</h3>
        </div>
    </div>
    <div className='info'>
        <p className='infoPaneles'>
        Descubre el potencial de la energía solar y las soluciones sostenibles para un futuro más brillante.
        En nuestra página, te invitamos a explorar el fascinante mundo de la energía solar y las tecnologías renovables que están transformando la forma en que obtenemos y utilizamos la energía. Desde los paneles solares hasta los inversores, baterías de litio, termotanques, bombas y climatizadores de piscinas, tenemos todas las soluciones que necesitas para aprovechar al máximo el poder del sol.
        En nuestra página, encontrarás la información detallada sobre cada una de estas tecnologías solares, así como las opciones de productos y servicios que ofrecemos. Estamos comprometidos en brindarte soluciones personalizadas, asesoramiento experto y la más alta calidad en productos para que puedas embarcarte en un futuro energético sostenible.

        ¡Únete al movimiento solar y descubre el potencial ilimitado de la energía renovable para un mundo más limpio, eficiente y rentable!"
        </p>
    </div>
    <div className='Fotos'>
        <div className='inv'>
        <img className='inversor' src={inversor} alt="" />
    <p className='parrafo1'>  Nuestros inversores son clave para optimizar la producción de energía, convirtiendo la corriente continua generada por los paneles en corriente alterna lista para ser utilizada en tu hogar o negocio. Con tecnología avanzada y alta eficiencia, los inversores garantizan un rendimiento óptimo y la máxima eficiencia energética. </p>
    </div>
    <div className='inv'>
        <img className='inversor' src={bateria} alt="" />
        <p className='parrafo1'> Para almacenar y utilizar la energía solar incluso cuando el sol no está brillando, ofrecemos baterías de litio de alto rendimiento. Estas baterías te permiten almacenar el exceso de energía generada durante el día y utilizarla durante la noche o en momentos de alta demanda, brindándote autonomía y estabilidad en el suministro energético.
        </p>
    </div>
    <div className='inv'>
        <img className='inversor' src={termotanque} alt="" />
        <p className='parrafo1'> Si estás buscando una solución para calentar el agua de tu hogar de manera eficiente y sostenible, nuestros termotanques solares son la elección perfecta. Aprovechando el calor del sol, estos sistemas te permiten obtener agua caliente de manera eco-amigable, reduciendo el consumo de energía convencional y ahorrando dinero a largo plazo.
        </p>
    </div>
    <div className='inv'>
        <img className='inversor' src={climatizador} alt="" />
        <p className='parrafo1'> Para mantener tu piscina en condiciones óptimas durante todo el año, nuestros climatizadores de piscinas utilizan la energía solar para calentar el agua de manera eficiente y sin emisiones contaminantes. Disfruta de una piscina cálida y confortable, al tiempo que reduces tu impacto ambiental y ahorras en costos de calefacción.
        </p>
    </div>
</div>
    </section>
  )
}
