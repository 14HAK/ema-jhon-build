const SingleOrder = ({ cartProduct }) => {
  const { name, img, price, quantity } = cartProduct;
  return (
    <div className=' rounded-lg'>
      <div className='h-32 border border-slate-200 justify-between mb-3 rounded-lg bg-white p-3 shadow-md sm:flex sm:justify-start'>
        <img
          src={img}
          alt='product-image'
          className='w-full rounded-lg sm:w-40'
        />
        <div className='sm:ml-4 sm:flex sm:w-full sm:justify-between'>
          <div className='mt-5 sm:mt-0'>
            <h2 className='text-lg font-bold text-gray-900'>{name}</h2>
            <p className='mt-1 text-md text-gray-700'>
              Total: {quantity} items
            </p>
          </div>
          <div className='mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6'>
            <div className='flex items-center border-gray-100'></div>
            <div className='flex items-center space-x-4'>
              <p className='text-sm'>
                <span className='font-bold text-blue-500'>$</span>{' '}
                {price * quantity}
              </p>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='h-5 w-5 cursor-pointer duration-150 hover:text-red-500'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleOrder;
