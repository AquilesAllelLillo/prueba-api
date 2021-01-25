import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(API);
        const data = await response.json();
        return setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  return products;
}

export default useInitialState;