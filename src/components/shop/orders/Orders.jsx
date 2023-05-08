import { useLoaderData } from 'react-router-dom';
import CartSummary from '../cart-area/CartSummary';
import SingleOrder from './singleOrder/SingleOrder';
import { useState } from 'react';
import { removeFromDb } from '../../../lib/utilities/demo';

const Orders = () => {
  const { cartProducts } = useLoaderData();
  const [cartPros, setCartPros] = useState(cartProducts);

  const handleClickRemove = (id) => {
    let extraItem = cartPros.filter((product) => product.id !== id);
    setCartPros(extraItem);
    removeFromDb(id);
  };

  console.log(cartPros);

  return (
    <div className='grid grid-cols-12'>
      <div className='cards col-span-9 p-10 grid grid-cols-1 gap-2 justify-center'>
        <div className=''>
          {cartPros.map((product, index) => (
            <SingleOrder
              key={index}
              cartProduct={product}
              handleClick={handleClickRemove}
            ></SingleOrder>
          ))}
        </div>
      </div>

      <div className='orders-summery col-span-3 p-5 bg-slate-200'>
        <CartSummary cartProducts={cartPros}></CartSummary>
      </div>
    </div>
  );
};

export default Orders;
