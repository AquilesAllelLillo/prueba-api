import React from 'react';

import logo_alt from '../assets/statics/logo_alt.png';
import vtex from '../assets/statics/vtex.png';

import '../assets/styles/components/Footer.css';

const Footer = () => (
  <footer className="footer">
    <div>
      <a href="/">Terminos de uso</a>
      <a href="/">Declaración de privacidad</a>
      <a href="/">Centro de ayuda</a>
    </div>
    <div>
      <img src={logo_alt} alt="Icono corebiz"/>
      <img src={vtex} alt="Icono vtex"/>
    </div>
  </footer>
);

export default Footer;