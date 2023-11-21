'use client';
import { FaShoppingCart } from 'react-icons/fa';
import { toggleCart } from '../store/reducers/cartSlice';
import ShoppingCart from './ShoppingCart';
import styles from '../styles/NavBar.module.css';
import Link from 'next/link';
import Image from 'next/image';
// import chicken_header from '../../public/chicken_header.json';
import Small_Logo from '../../public/Small_KKC_Logo_Nav.png';
import KKC_LOGO_Small from '../../public/kookoo-logo-small.svg';

const NavBar = () => {
  // const dispatch = useDispatch();

  return (
    <div className={`${styles.widecontainer}`}>
      <div className={`${styles.container}`}>
        <div>
          <Link href="/">
            <Image
              className={`${styles.kookooicon}`}
              height={57}
              priority
              src={KKC_LOGO_Small}
              alt="Koo Koo Chicken Logo"
            />
          </Link>
        </div>

        {/* <div className="hidden sm:flex">
          <ul className="flex mt-2 font-thin flex-row text-sm lg:font-medium lg:space-x-4 lg:mt-0 py-2 space-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
          </ul>
        </div> */}

        <ShoppingCart />
      </div>
    </div>
  );
};

export default NavBar;
