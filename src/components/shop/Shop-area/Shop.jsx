import Card from './card/Card';
import CartSummary from '../cart-area/CartSummary';
import { Link, useLoaderData } from 'react-router-dom';
import { addToCart, deleteShoppingCart } from '../../../lib/utilities/demo';

const Shop = () => {
  let { products, cartProducts } = useLoaderData();

  const handleAddToCart = (product) => {
    addToCart(product.id);
  };

  const handleClearCart = () => {
    deleteShoppingCart();
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
        <CartSummary
          cartProducts={cartProducts}
          handleClearCart={handleClearCart}
        >
          <Link to={'/orders'}>
            <button
              to={'/orders'}
              type='button'
              className='w-full text-green-700 hover:text-white border border-green-700 hover:bg-green-800 font-medium rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 '
            >
              Review Order
            </button>
          </Link>
        </CartSummary>
      </div>
    </div>
  );
};

export default Shop;
