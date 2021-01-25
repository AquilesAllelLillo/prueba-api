import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/statics/logo.png';
import shoppingCart from '../assets/statics/shopping-cart.png';
import account from '../assets/statics/account.png';

const Header = () => (
  <header className="header">

    <Link to="/">
      <img className="header__img" src={logo} alt="logo Corebiz"/>
    </Link>

    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={account} alt="Icono usuario"/>
        <p>Perfil</p>
      </div>
      <ul>
        <li><Link to="/login">Iniciar Sesión</Link></li>
        <li><a href="/">Cuenta</a></li>
        <li><a href="/">Cerrar Sesión</a></li>
      </ul>
      <div className="header__shopping-cart">
        <img src={shoppingCart} alt="Icono shopping cart"/>
      </div>
    </div>
  </header>
);

export default Header;