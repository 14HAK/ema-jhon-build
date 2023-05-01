const OrderSUM = ({ cartProduct }) => {
  for (const product of cartProduct) {
    product.quantity = product.quantity || 1;
  }

  let totalPrice = cartProduct.reduce((previous, product) => {
    return previous + product.price * product.quantity;
  }, 0);

  let shippingCharge = cartProduct.reduce((previous, product) => {
    return previous + product.shipping;
  }, 0);

  let tax = totalPrice * 0.007;
  let taxInt = tax.toFixed(1);
  let grandTotal = totalPrice + shippingCharge + tax;
  let grandTotalInt = grandTotal.toFixed(1);

  return (
    <div className='h-screen'>
      <section
        aria-labelledby='summary-heading'
        className='fixed border border-slate-400 p-5 rounded-md'
      >
        <h2 id='summary-heading' className='text-2xl text-center font-bold'>
          Order summary
        </h2>
        <dl className=''>
          <div className=''>
            <dt className='pt-5 text-lg'>
              Selected Items: {cartProduct.length}
            </dt>
            <dd className=''>Total Price: ${totalPrice} </dd>
          </div>
          <div className=''>
            <dt className=''>
              <span className='text-lg'>
                Shipping Charge: ${shippingCharge}
              </span>
            </dt>
            <dd className='text-lg'>Tax: ${taxInt} </dd>
          </div>
          <div className=''>
            <dt className=''>
              <span className='text-xl font-semibold pt-5'>
                Grand Total: ${grandTotalInt}
              </span>
            </dt>
            <hr className='border border-slate-700' />
          </div>
        </dl>
        <div className='pt-5 text-center'>
          <button
            type='button'
            className='w-full text-red-700 hover:text-white border border-red-700 hover:bg-red-500  font-medium rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 '
          >
            Clear Cart
          </button>
        </div>
        <div className='pt-0 text-center'>
          <button
            type='button'
            className='w-full text-green-700 hover:text-white border border-green-700 hover:bg-green-800 font-medium rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 '
          >
            Review Order
          </button>
        </div>
      </section>
    </div>
  );
};

export default OrderSUM;
