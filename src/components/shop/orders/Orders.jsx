import { Link, useLoaderData } from 'react-router-dom';
import CartSummary from '../cart-area/CartSummary';
import SingleOrder from './singleOrder/SingleOrder';
import { useState } from 'react';
import { deleteShoppingCart, removeFromDb } from '../../../lib/utilities/demo';

const Orders = () => {
  const { cartProducts } = useLoaderData();
  const [cartPros, setCartPros] = useState(cartProducts);

  const handleClickRemove = (id) => {
    let extraItem = cartPros.filter((product) => product.id !== id);
    setCartPros(extraItem);
    removeFromDb(id);
  };

  const handleClearCart = () => {
    setCartPros([]);
    deleteShoppingCart();
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
        <CartSummary cartProducts={cartPros} handleClearCart={handleClearCart}>
          <Link to={'/'}>
            <button
              type='button'
              className='w-full text-green-700 hover:text-white border border-green-700 hover:bg-green-800 font-medium rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 '
            >
              Proceed Checkout
            </button>
          </Link>
        </CartSummary>
      </div>
    </div>
  );
};

export default Orders;
