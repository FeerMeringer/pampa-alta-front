import React, { useState } from 'react';
import './Navbar.css';
import { Link as Anchor } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="main-navbar">
            <div className="navbar-logo">
                <Anchor to="/">
                    <img src="https://i.imgur.com/RgqM0CU.png" alt="Pampa Alta Solar Logo" />
                </Anchor>
            </div>
            
            <div className="menu-toggle" onClick={toggleMenu}>
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="menu-icon" />
            </div>

            <ul className={`navbar-list ${isOpen ? 'active' : ''}`}>
                <li className="navbar-item"><Anchor to="/" onClick={toggleMenu}>Inicio</Anchor></li>
                <li className="navbar-item"><Anchor to="/productos" onClick={toggleMenu}>Productos</Anchor></li>
                <li className="navbar-item"><Anchor to="/Instalacion" onClick={toggleMenu}>Instalación</Anchor></li>
                <li className="navbar-item"><Anchor to="/Nosotros" onClick={toggleMenu}>Nosotros</Anchor></li>
                <li className="navbar-item"><Anchor to="/contacto" onClick={toggleMenu}>Contacto</Anchor></li>
                
            </ul>
        </nav>
    );
};

export default Navbar;