import CartSummary from '../cart-area/CartSummary';

const Orders = () => {
  return (
    <div className='grid grid-cols-12'>
      <div className='cards col-span-9 p-10 grid grid-cols-3 gap-2'>
        <h2 className='text-3xl text-slate-600'>All orders here</h2>
      </div>

      <div className='orders-summery col-span-3 p-5 bg-slate-200'>
        <CartSummary cartProduct={[]}></CartSummary>
      </div>
    </div>
  );
};

export default Orders;
