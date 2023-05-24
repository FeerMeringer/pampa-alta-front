import React from 'react';
import './Navbar.css'
import logo from '../images/logo.png'

const Navbar = () => {
    return (
        <nav class="navbar">
        <div class="navbar-logo">
          <img src={logo} alt=""/>
        </div>
        <ul class="navbar-list">
          <li class="navbar-item"><a href="#inicio">Inicio</a></li>
          <li class="navbar-item"><a href="#productos">Productos</a></li>
          <li class="navbar-item"><a href="#instalacion">Instalación</a></li>
          <li class="navbar-item"><a href="#calculador">Trabajos Realizados</a></li>
          <li class="navbar-item"><a href="#acerca-de">Acerca de</a></li>
          <li class="navbar-item"><a href="#contacto">Contacto</a></li>
        </ul>
        <div class="navbar-company">PAMPA ALTA SOLAR</div>
      </nav>
      


    )
};

export default Navbar;
