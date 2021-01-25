import React from 'react';
//import '../assets/styles/components/Search.scss'

import searchIcon from '../assets/statics/search-black.svg';

const Search = () => (
  <section className="main">
    <input type="text" className="input" placeholder="O que está procurando?"/><img className="search__img" src={searchIcon} alt="Search icon"/>
  </section>
);

export default Search;