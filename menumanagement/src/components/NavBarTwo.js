'use client';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '../store/reducers/cartSlice';
import ShoppingCart from './ShoppingCart';
import styles from '../styles/NavBarTwo.module.css';
import Link from 'next/link';
const NavBar = () => {
  const dispatch = useDispatch();

  return (
    // className="flex flex-wrap justify-between space-x-4 mx-auto max-w-screen-xl max-hd-[40px] drop-shadow-sm border-blue-50 border-b-2"
    <>
      <nav>
        <ul id="primary-navigation" class={styles['primary-navigation']}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/menu">About Us</a>
          </li>
          <li>
            <a href="/catering">Catering</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
