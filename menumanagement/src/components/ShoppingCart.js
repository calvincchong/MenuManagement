'use client';
import { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import {useSelector, useDispatch} from 'react-redux';
import { toggleCart } from '../store/reducers/cartSlice';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const [numberOfItems, setNumberOfItems] = useState('');

  // determines number of items to set in the cart and adds event listener for future changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      let num = localStorage.getItem('cart') !== 'undefined' && localStorage.getItem('cart') !== null ? JSON.parse(localStorage.getItem('cart')).length : 0;
      setNumberOfItems(num);
      // localStorage.setItem('cart', JSON.stringify(num));

      // Listen for addItemToCart event
      window.addEventListener('addItemToCart', () => {
        const items = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : 0;
        setNumberOfItems(items.length || 0);
      });

      window.addEventListener('removeItemFromCart', () => {
        const items = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : 0;
        setNumberOfItems(items.length || 0);
      });
    }
  }, []);

  return (
    <>
      <div className="p-2 relative"
      onClick={() => dispatch(toggleCart())}
     >
      <FaShoppingCart className="text-orange-400 text-3xl"/>
      <div className="z-10 absolute bottom-1 left-1 text-center text-xs text-black bg-orange-200 rounded-full min-w-[1.5rem] min-h-[1.5rem] drop-shadow-sm">
        <p className="align-text-middle p-1">{numberOfItems}</p>
      </div>
     </div>
    </>
  )
}

export default ShoppingCart;