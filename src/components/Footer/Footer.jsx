import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <section className='desarrollo'>
      <footer className="footer">
        <div className="footer-seccion">
          <h3>Direccion:</h3>
          <p className="direccion">Paraje Pampa Alta</p>
          <p className="direccion">Manzana 3</p>
          <p className="direccion">Lote 13</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1903.4645335520088!2d-64.62983418041713!3d-31.781716350684192!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d4b47a399d00f%3A0xc371d3e24a266988!2sPampa%20alta%20solar!5e0!3m2!1ses!2sar!4v1687444886529!5m2!1ses!2sar" width="250" height="140" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="footer-seccion">
          <h3>Contacto:</h3>
          <p>Pampa Alta</p>
          <a href="tel:+543516803734"> Tel: 3516803734</a>
          <a href="tel:+543513438681">Tel: 3513438681</a>
          <a href="mailto:fermeringer@gmail.com">Email: solarpampaalta@gmail.com</a>
        </div>
        <div className="footer-seccion">
          <h3>Síguenos:</h3>
          <ul className="redes-sociales">
            {/* <li><a href="https://api.whatsapp.com/pampaaltasolar/"><i className="fab"></i><img  className='fab' src={Whats} alt="WhatsApp" /></a></li> */}
            <li><a href="https://www.instagram.com/"><i className="fab"></i><img className='fab' src="https://i.imgur.com/HqjBg3r.png" alt="Instagram" />
            </a></li>
          </ul>
        </div>
      </footer>
      <div className='nombre'>
        <a className='fer' href="https://www.linkedin.com/in/fernandameringer/" target="_blank"> Desarrollado by Feer Meringer</a>


      </div>
    </section>
  );
}
