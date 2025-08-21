import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className="main-footer">
            <div className="footer-container">
                {/* Logo y Eslogan */}
                <div className="footer-item footer-info">

                    <p>Energía limpia para un futuro sostenible.</p>
                </div>

                {/* Contacto */}
                <div className="footer-item footer-contact">
                    <p><FontAwesomeIcon icon={faPhone} className="contact-icon" /> <a href="tel:+543516803734">3516803734</a></p>
                    <p><FontAwesomeIcon icon={faPhone} className="contact-icon" /> <a href="tel:+543513438681">3513438681</a></p>
                    <p><FontAwesomeIcon icon={faEnvelope} className="contact-icon" /> <a href="mailto:solarpampaalta@gmail.com">meringergiselle@gmail.com</a></p>
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
                    <a href="https://maps.google.com/?q=Paraje+Pampa+Alta+Córdoba" target="_blank" rel="noopener noreferrer">
                        Paraje Pampa Alta, Córdoba
                    </a>
                </div>

                {/* Redes sociales */}
                <div className="footer-item footer-social">
                    <a href="https://api.whatsapp.com/send?phone=3516803734" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} /></a>
                    <a href="https://www.instagram.com/pampaaltasolar/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                    
                </div>
            </div>

            {/* Copyright y Desarrollador */}
            <div className="footer-bottom">
                <p>
                    <span className="copyright-text">&copy; 2024 Pampa Alta Solar. Todos los derechos reservados.</span>
                    <span className="developer-text">Desarrollado por <a className='fer' href="https://www.linkedin.com/in/fernandameringer/" target="_blank" rel="noopener noreferrer">Feer Meringer</a></span>
                </p>
            </div>
        </footer>
    );
}