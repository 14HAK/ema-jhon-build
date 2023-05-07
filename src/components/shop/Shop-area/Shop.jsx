import { useEffect, useState } from 'react';

import Card from './card/Card';
import { addToCart, getStoredCart } from '../../../lib/utilities/demo';
import CartSummary from '../cart-area/CartSummary';
import { useLoaderData } from 'react-router-dom';

const Shop = () => {
  const { products, cartProduct } = useLoaderData();

  const handleAddToCart = (product) => {
    addToCart(product.id);
  };

  return (
    <div className='grid grid-cols-12'>
      <div className='cards col-span-9 p-10 grid grid-cols-3 gap-2'>
        {products.map((product, index) => (
          <Card
            key={index}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Card>
        ))}
      </div>

      <div className='orders-summery col-span-3 p-5 bg-slate-200'>
        <CartSummary cartProduct={cartProduct}></CartSummary>
      </div>
    </div>
  );
};

export default Shop;
