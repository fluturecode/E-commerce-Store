import React, {useState, createContext } from 'react';
import { storeProducts, detailProduct } from './data';
const ProductContext = createContext();

const ProductProvider = () => {

  const [products, setProducts] = useState([]);

  const setProducts = () => {
    const products = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      products = [...products, singleItem];
    });
  }
  setProducts(products);

  useEffect( () => {
    setProducts();
  }, []);

  return (
    <ProductProvider />
  );
};

const ProductConsumer = ProductContext.Consumer;

export default { ProductContext, ProductProvider, ProductConsumer };