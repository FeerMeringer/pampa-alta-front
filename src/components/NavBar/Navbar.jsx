import React from 'react';
import './Navbar.css'

import {Link as Anchor} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav class="navbar">
        <div class="navbar-logo">
          <img src="https://i.imgur.com/RgqM0CU.png" alt="logo"/>
        </div>
        <ul class="navbar-list">
          <li class="navbar-item"><Anchor to="/">Home</Anchor></li>
          <li class="navbar-item"><Anchor to="/productos">Productos</Anchor></li>
          <li class="navbar-item"><Anchor to="/Instalacion">Instalación</Anchor></li>
          <li class="navbar-item"><Anchor to="/Nosotros">Nosotros</Anchor></li>
          <li class="navbar-item"><Anchor to="/contacto">Contacto</Anchor></li>
        </ul>
        <div class="navbar-company">PAMPA ALTA SOLAR</div>
      </nav>
      


    )
};

export default Navbar;
