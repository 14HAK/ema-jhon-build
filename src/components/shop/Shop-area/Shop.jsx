import Card from './card/Card';
import CartSummary from '../cart-area/CartSummary';
import { useLoaderData } from 'react-router-dom';
import { addToCart } from '../../../lib/utilities/demo';

const Shop = () => {
  let { products, cartProducts, handleClearCart } = useLoaderData();

  const handleAddToCart = (product) => {
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
        <CartSummary
          cartProducts={cartProducts}
          handleClearCart={handleClearCart}
        ></CartSummary>
      </div>
    </div>
  );
};

export default Shop;
