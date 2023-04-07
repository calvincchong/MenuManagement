'use client';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import {toggleCart} from '../store/reducers/cartSlice';
import ShoppingCart from './ShoppingCart';
import styles from '../styles/NavBar.module.css';
import Link from 'next/link';
import Lottie from 'lottie-react';
import chicken_header from '../../public/chicken_header.json';

const NavBar = () => {
  const dispatch = useDispatch();

  return (
    // className="flex flex-wrap justify-between space-x-4 mx-auto max-w-screen-xl max-hd-[40px] drop-shadow-sm border-blue-50 border-b-2"
    <div className={`${styles.widecontainer}`}>
    <div className={`${styles.container}`}>
      <div className="grid grid-cols-2 max-h-[64]">
       <div><Lottie animationData={chicken_header} loop={true} /></div>
       <div className="mt-auto mb-auto font-thin hidden sm:visible">Koo Koo Chicken</div>
      </div>

      <div className="hidden sm:visible">
        <ul className="flex mt-2 font-thin flex-row text-sm lg:font-medium lg:space-x-4 lg:mt-0 py-2 space-x-4">
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/menu'>Menu</Link>
          </li>
        </ul>
      </div>

      <ShoppingCart />
    </div>
    </div>
  )
}

export default NavBar;