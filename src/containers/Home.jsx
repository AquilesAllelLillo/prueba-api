import React from 'react';

import Banner from '../components/Banner';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

import useInitialState from '../hooks/useInitialState';

const API = 'https://5d8cdb5a443e3400143b4bea.mockapi.io/corebizchile/products';

const Home = () => {

  const initialState = useInitialState(API);

  return(
    <React.Fragment>
      <Banner />

      <Carousel>
        {initialState.map(item =>
          <CarouselItem key={item.id} {...item} />
        )}
      </Carousel>

    </React.Fragment>
  )
  
  };

export default Home;