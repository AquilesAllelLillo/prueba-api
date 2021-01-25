import React from 'react';

import logo_alt from '../assets/statics/logo_alt.png';
import vtex from '../assets/statics/vtex.png';
import mail from '../assets/statics/mail.png'
import heatset from '../assets/statics/heatset.png'

import '../assets/styles/components/Footer.css';

const Footer = () => (
  <footer className="footer">
    <div>
      <h1>Localização</h1>
      <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
      <p>Alphavile SP</p>
      <p>brasil@corebiz.ag</p>
      <p>+55 11 3090 1039</p>
    </div>
    <div>
      <button variant="light" disabled>
        <img src={mail} alt="Icono corebiz"/>
        ENTRE EM CONTATO
      </button>
      <button variant="light" disabled>
        <img src={heatset} alt="Icono corebiz"/>
        FALE COM O NOSSO CONSULTOR ONLINE
      </button>
    </div>
    <div>
      <div className="by">
        <p>Created by</p>
        <img src={logo_alt} alt="Icono corebiz"/>
      </div>
    </div>
    <div>
      <div className="by">
        <p>Powered by</p>
        <img src={vtex} alt="Icono vtex"/>
      </div>
    </div>
  </footer>
);

export default Footer;