import React from 'react';
import { Link } from 'react-router-dom';

import Search from '../components/Search';

import logo from '../assets/statics/logo.png';
import shoppingCart from '../assets/statics/shopping-cart.png';
import account from '../assets/statics/account.png';

import '../assets/styles/components/Header.css';

const Header = () => (
  <header className="header">

    <Link to="/">
      <img className="header__img" src={logo} alt="logo Corebiz"/>
    </Link>

    <Search />

    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={account} alt="Icono usuario"/>
        <p>Minha Conta</p>
      </div>
    </div>
    <div className="header__menu--shopping">
      <div className="header__shopping-cart">
        <img src={shoppingCart} alt="Icono shopping cart"/>
      </div>
    </div>
  </header>
);

export default Header;