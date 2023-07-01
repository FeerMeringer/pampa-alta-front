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
  
        <div class="container">
          <div className='box'>
          <img className='panel' src="https://i.imgur.com/hccXRVI.jpg" alt="FotoInversor"/>
            <p className='parrafo1'>Inversor Voltronic vm 2kw/3kw</p>
            </div>
            <div className='box'>
          <img className='panel' src="https://i.imgur.com/ngpdqHI.jpg" alt="FotoInversor"/>
            <p className='parrafo1'>Inversor growatt spf 5 kw</p>
            </div>
            <div className='box'>
          <img className='panel' src="https://i.imgur.com/BSf7NGR.png" alt="FotoPanel"/>
            <p className='parrafo1'>Paneles Amerisolar 410w/450w/340w</p>
            </div>
            <div className='box'>
          <img className='panel' src="https://i.imgur.com/lAMsn7c.jpg" alt="FotoBateria"/>
            <p className='parrafo1'>Batería UltraCell 200Ah-12V</p>
            </div>
            <div className='box'>
          <img className='panel' src="https://i.imgur.com/Pzdx0R6.png" alt="FotoBateria"/>
            <p className='parrafo1'>Bateria De Litio Pylontech 48V 3552Wh</p>
            </div>
            <div className='box'>
          <img className='panel' src="https://i.imgur.com/63XYiD0.jpg" alt="FotoBateria"/>
            <p className='parrafo1'> Batería de Litio Growatt 4.8L</p>
            </div>
            <div className='box'>
          <img className='panel' src="https://i.imgur.com/xp0xd2v.jpg" alt="FotoBateria"/>
            <p className='parrafo1'> Bateria Litio Blue Carbon 24V/48V</p>
            </div>
            <div className='box'>
          <img className='panel' src="https://i.imgur.com/pg14Ewv.jpg" alt="FotoBateria"/>
            <p className='parrafo1'> Bateria Leoch 230AH</p>
            </div>
            <div className='box'>
          <img className='panel' src="https://i.imgur.com/1Aj9h1h.jpg" alt="FotoBomba"/>
            <p className='parrafo1'>Bomba Helicoidal Sumergible Handuro 750W </p>
            </div>

        </div>

      <a href="https://api.whatsapp.com/send?phone=3516803734" target="_blank" className="whatsapp-float">
        <img className="imgWhats" src="https://i.imgur.com/NQEJITk.png" alt="WhatsApp" />
      </a>


    </section>

  );
}
