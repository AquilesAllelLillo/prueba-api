import React from 'react';

const Carousel = ({ children }) => (
  <section className="carousel">
    <h3 className="carousel__title">Mais Vendidos</h3>
    <div className="carousel__container">
      {children}
    </div>
  </section>
);

export default Carousel;