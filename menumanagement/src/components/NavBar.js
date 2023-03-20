'use client';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import {toggleCart} from '../store/reducers/cartSlice';
import ShoppingCart from './ShoppingCart';

const NavBar = () => {
  const dispatch = useDispatch();

  return (
    <div className="position:fixed flex flex-wrap justify-between space-x-4 mx-auto max-w-screen-xl max-hd-[40px] rop-shadow-sm border-blue-50 border-b-2">
     <div> Koo Koo Logo </div>
      <ul className="flex mt-2 font-medium flex-row lg:space-x-4 lg:mt-0 py-2 space-x-4">
        <li>Home</li>
        <li>Menu</li>
        <li>About</li>
      </ul>
      <ShoppingCart />
    </div>
  )
}

export default NavBar;