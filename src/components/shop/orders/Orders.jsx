import { useLoaderData } from 'react-router-dom';
import CartSummary from '../cart-area/CartSummary';
import SingleOrder from './singleOrder/SingleOrder';

const Orders = () => {
  const { cartProducts } = useLoaderData();
  return (
    <div className='grid grid-cols-12'>
      <div className='cards col-span-9 p-10 grid grid-cols-1 gap-2 justify-center'>
        <div className=''>
          {cartProducts.map((cartProduct, index) => (
            <SingleOrder key={index} cartProduct={cartProduct}></SingleOrder>
          ))}
        </div>
      </div>

      <div className='orders-summery col-span-3 p-5 bg-slate-200'>
        <CartSummary cartProducts={cartProducts}></CartSummary>
      </div>
    </div>
  );
};

export default Orders;
