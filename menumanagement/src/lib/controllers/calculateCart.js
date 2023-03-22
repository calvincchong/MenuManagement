/**
 * @fileoverview all functionality that interacts with the cart should be added here. This includes adding, removing, and updating items in the cart.. As well as calculating Prices based on quantity or Add-ons (in future).
 * This is currently based off the model where the cart is a long continuous string of all the items added.
 */

/**
 * @param {array} cart - arrayOfObjects;
 * @returns {number} - various prices of the Cart
 */
const calculateCart = {
  'preTax': (cart) => {
    return cart.reduce((acc, item) => {
      return acc + item.price;
    }, 0).toFixed(2);
  },
  'tax': (cart) => {
    return (calculatCart.preTax(cart) * 1.0875).toFixed(2);
  },
  'total': (cart) => {
    return (calculateCart.preTax(cart) * 1.0875).toFixed(2);
  }
};

/**
 * @param {object} key : entire item object to add to cart
 * @returns {void} : sideeffect removes item from updates cart state and localstorage. CartState triggers re-render.
 * should remove the index of last matching item.
 */
const removeFromCartAndSetStorage  = ( key, cart ) => {
  let index = cart.findLastIndex((item) => item.menuName === key.menuName);
  let newCart = [...cart.slice(0, index), ...cart.slice(index + 1)];
  return newCart;
};

/**
 * logic used in ItemCars, and CartDetails for adding items into the cart
 * @param {} item - item to add to cart (object)
 * @param {*} cart - optional, if not provided, will use localStorage
 * @returns {void} : sideeffect updates cart state and localstorage with additional item
 */
const addItemToCartAndSetStorage = (item, cart = []) => {
  if (typeof window !== 'undefined') {
    let newCart = cart || localStorage.getItem('cart') !== undefined ? JSON.parse(localStorage.getItem('cart')) : [];
    newCart = [...newCart, item];
    localStorage.setItem('cart', JSON.stringify(newCart));
    window.dispatchEvent(new Event('addItemToCart')); // Mechanism to update cart displaying number of items
  }
}

const removeAllOfOneItemFromCart = (item, cart) => {
  let newCart = cart.filter((cartItem) => cartItem.menuName !== item.menuName);
  console.log('what is the new cart after remove', item, newCart);
  return newCart;
};

module.exports = {
  'calculateCart': calculateCart,
  'removeFromCartAndSetStorage': removeFromCartAndSetStorage,
  'addItemToCartAndSetStorage': addItemToCartAndSetStorage,
  'removeAllOfOneItemFromCart': removeAllOfOneItemFromCart,
};
