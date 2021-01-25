import React from 'react';

import banner from '../assets/statics/Banner.jpg';

import '../assets/styles/components/Banner.css';

const Banner = () => (
  <div className="banner">
    <img src={banner} alt="Banner"/>
  </div>
);

export default Banner;