import React from 'react';
//import PropTypes from 'prop-types';

import '../assets/styles/components/CarouselItem.css';

const CarouselItem = ({ product, img, sku, description, category, price, color }) => (
    
  <div className="carousel-item">
    <img className="carousel-item__img" src={ img } alt={ product }  />
    <div className="carousel-item__details">
      <p className="carousel-item__details--title">{ product }</p>
      <p className="carousel-item__details--sku">{ sku }</p>
      <p className="carousel-item__details--description">{ description }</p>
      <p className="carousel-item__details--category">{ category }</p>
      <p className="carousel-item__details--price">$ { price }</p>
      <p className="carousel-item__details--color">{ color }</p>
      <button variant="primary">Comprar</button>
    </div>
  </div>
);

export default CarouselItem;