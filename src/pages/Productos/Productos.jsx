import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logoWhats from '../../components/images/logoWhats.png'
import './Productos.css'


export default function Productos({ product }) {

  return (
    <section className='producto'>
      <div className='infoProduct'>
        <h1 className='titulo1'>
          Nuestros Productos
        </h1>
        <p className='titulo2'>
          Descubre una amplia gama de productos de energía solar que te ayudarán a aprovechar al máximo el poder del sol. Nuestra selección incluye paneles solares de alta eficiencia, inversores avanzados, baterías de litio de larga duración, termotanques innovadores, bombas solares confiables y climatizadores de piscinas ecoamigables. Estos productos te permitirán generar energía limpia y renovable, reduciendo tu dependencia de fuentes no sostenibles. Explora nuestra colección de productos solares y da un paso hacia un futuro más ecológico y eficiente.
        </p>
      </div>
      <div className='Fotos'>
        <div className='panel1'>
          <img className='panel' src="https://i.imgur.com/lss7UdQ.jpg" alt="Paneles solares" />
          <p className='parrafo1'>  Genera tu propia energía limpia con nuestros paneles solares de alta calidad. Nuestros paneles solares utilizan tecnología de vanguardia para capturar eficientemente la energía del sol y convertirla en electricidad sostenible. Convierte tu techo en una fuente de energía renovable y reduce tu huella de carbono con nuestros paneles solares confiables y de alta calidad. </p>
        </div>
        <div className='panel1'>
          <img className='panel' src="https://i.imgur.com/6K3cvwn.jpg" alt="Inversores" />
          <p className='parrafo1'>  Nuestros inversores son clave para optimizar la producción de energía, convirtiendo la corriente continua generada por los paneles en corriente alterna lista para ser utilizada en tu hogar o negocio. Con tecnología avanzada y alta eficiencia, los inversores garantizan un rendimiento óptimo y la máxima eficiencia energética. </p>
        </div>
        <div className='panel1'>
          <img className='panel' src="https://i.imgur.com/vZyWGmO.jpg" alt="Baterias" />
          <p className='parrafo1'> Para almacenar y utilizar la energía solar incluso cuando el sol no está brillando, ofrecemos baterías de litio de alto rendimiento. Estas baterías te permiten almacenar el exceso de energía generada durante el día y utilizarla durante la noche o en momentos de alta demanda, brindándote autonomía y estabilidad en el suministro energético.
          </p>
        </div>
      </div>
      <div className='Fotos1'>
        <div className='panel1'>
          <img className='panel' src="https://i.imgur.com/Iibpur1.jpg" alt="Termotanque" />
          <p className='parrafo1'> Si estás buscando una solución para calentar el agua de tu hogar de manera eficiente y sostenible, nuestros termotanques solares son la elección perfecta. Aprovechando el calor del sol, estos sistemas te permiten obtener agua caliente de manera eco-amigable, reduciendo el consumo de energía convencional y ahorrando dinero a largo plazo.
          </p>
        </div>
        <div className='panel1'>
          <img className='panel' src="https://i.imgur.com/DybftkF.jpg" alt="Climatizador" />
          <p className='parrafo1'> Para mantener tu piscina en condiciones óptimas durante todo el año, nuestros climatizadores de piscinas utilizan la energía solar para calentar el agua de manera eficiente y sin emisiones contaminantes. Disfruta de una piscina cálida y confortable, al tiempo que reduces tu impacto ambiental y ahorras en costos de calefacción.
          </p>
        </div>

      </div>
      <a href="https://api.whatsapp.com/send?phone=3516803734" target="_blank" className="whatsapp-float">
        <img className="imgWhats" src="https://i.imgur.com/NQEJITk.png" alt="WhatsApp" />
      </a>


    </section>

  );
}
