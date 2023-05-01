const addToCart = (id) => {
  // cart = [{id:1},{id:2}]
  let getCart = getStoredCart();

  let quantity = getCart[id];
  if (!quantity) {
    getCart[id] = 1;
  } else {
    let newQuantity = quantity + 1;
    getCart[id] = newQuantity;
  }
  localStorage.setItem('cart', JSON.stringify(getCart));
};

const getStoredCart = () => {
  let cart = {};
  let shoppingCart = localStorage.getItem('cart');

  if (shoppingCart) {
    cart = JSON.parse(shoppingCart);
  }

  return cart;
};

export { addToCart, getStoredCart };
