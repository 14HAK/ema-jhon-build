import { FaTrashAlt } from 'react-icons/fa';

const SingleOrder = ({ cartProduct, handleClick }) => {
  const { id, name, img, price, quantity, shipping } = cartProduct;

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
            <p className='mt-1 text-md text-gray-700'>Quantity: {quantity}</p>
            <p className='mt-1 text-md text-gray-700'>
              Shipping: <span className='font-bold text-blue-500'>$</span>{' '}
              {shipping}
            </p>
          </div>
          <div className='mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6'>
            <div className='flex items-center border-gray-100'></div>
            <div className='flex items-center space-x-4'>
              <p className='text-sm'>
                <span className='font-bold text-blue-500'>$</span>{' '}
                {price * quantity}
              </p>
              <button onClick={() => handleClick(id)}>
                {' '}
                <FaTrashAlt className='text-xl text-red-500 hover:text-red-700 cursor-pointer' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleOrder;
