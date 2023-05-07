import { useEffect, useState } from 'react';

import Card from './card/Card';
import { addToCart, getStoredCart } from '../../../lib/utilities/demo';
import CartSummary from '../cart-area/CartSummary';

const Shop = () => {
  const [products, SetProducts] = useState([]);
  const [cartProduct, setCartProduct] = useState([]);

  useEffect(() => {
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => SetProducts(data));
  }, []);

  useEffect(() => {
    let storedCart = getStoredCart();
    let finalCartProduct = [];
    for (const key in storedCart) {
      const element = key;
      let findCartProduct = products.find((product) => element === product.id);
      if (findCartProduct) {
        let quantity = storedCart[element];
        findCartProduct.quantity = quantity;
        finalCartProduct.push(findCartProduct);
      }
    }
    setCartProduct(finalCartProduct);
    console.log(finalCartProduct);
  }, [products]);

  const handleAddToCart = (product) => {
    let newCartProduct = [...cartProduct, product];
    setCartProduct(newCartProduct);
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
