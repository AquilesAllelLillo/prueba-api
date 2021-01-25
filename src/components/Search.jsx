import React from 'react';

import '../assets/styles/components/Search.css';

import searchIcon from '../assets/statics/search-black.svg';

const Search = () => (
  <section className="main">
    <input type="text" className="input" placeholder="O que está procurando?"/>
  </section>
);

export default Search;