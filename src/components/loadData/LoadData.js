import { getStoredCart } from '../../lib/utilities/demo';

// load product data and then compare to localStorage cart
const loadAllProducts = async () => {
  // first load the all data
  let getAllProducts = await fetch('products.json');
  let products = await getAllProducts.json();

  // second compare to localStored data
  let storedCart = getStoredCart();
  let savedCartProduct = [];

  for (const id in storedCart) {
    let findCartProduct = products.find((product) => id === product.id);
    if (findCartProduct) {
      let quantity = storedCart[id];
      findCartProduct.quantity = quantity;
      savedCartProduct.push(findCartProduct);
    }
  }

  return { products, cartProducts: savedCartProduct };
};

export default loadAllProducts;
