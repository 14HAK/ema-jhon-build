import { useEffect, useState } from 'react';
import OrderSUM from '../cart-area/OrderSUM';
import Card from './card/Card';
import { addToCart } from '../../../lib/utilities/demo';

const Page = () => {
  const [products, SetProducts] = useState([]);
  const [cartProduct, setCartProduct] = useState([]);

  useEffect(() => {
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => SetProducts(data));
  }, []);

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
        <OrderSUM cartProduct={cartProduct}></OrderSUM>
      </div>
    </div>
  );
};

export default Page;
