import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
    <div className="footer-contenido">
      <div className="footer-seccion">
        <h3>Acerca de Nosotros</h3>
        <p>En Pampa Alta Solar, nos apasiona la energía solar y su capacidad de transformar el mundo en un lugar más sostenible. Estamos comprometidos en brindar soluciones solares innovadoras y de alta calidad para ayudar a nuestros clientes a aprovechar al máximo este recurso renovable y limpio</p>
      </div>
      <div className="footer-seccion">
        <h3>Contacto</h3>
        <p>Pampa Alta</p>
        <p>Teléfono: +543516803734 / +543513438681</p>
        <p>Email: meringergiselle@gmail.com</p>
      </div>
      <div className="footer-seccion">
        <h3>Síguenos</h3>
        <ul className="redes-sociales">
          <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="#"><i className="fab fa-twitter"></i></a></li>
          <li><a href="#"><i className="fab fa-instagram"></i></a></li>
        </ul>
      </div>
    </div>
    <div className="footer-derechos">
      <p>Todos los derechos reservados &copy; 2023 Pampa Alta Energia Solar</p>
    </div>
  </footer>
);
}
