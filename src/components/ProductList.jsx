import React, { useContext, useState } from "react";
import Product from "./Product";
import Title from "./Title";
import { storeProducts } from "../data";
import styled from "styled-components";
import { ProductConsumer } from "../AppContext";

const ProductList = () => {
  
  const {products} = useContext(ProductContext)

  return (
      <>
        <ProductWrapper className='py-5'>
          <div className='container'>
            <Title name='our' title='products' />
            <div className='row'>
              {products.map(product => {
                return <Product key={product.id} product={product} />;
            })}
            </div>
          </div>
       </ProductWrapper>
      </>
  );
}

const ProductWrapper = styled.section``;

export default ProductList;