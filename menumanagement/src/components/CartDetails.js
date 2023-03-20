'use client';
import { useState, useEffect } from 'react';
import styles from '../styles/CartDetails.module.css';
import { HiChevronUp , HiChevronDown } from 'react-icons/hi2';
import _ from 'lodash';

const CartDetails = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    let storedCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    setCart(storedCart);

    window.addEventListener('addItemToCart', () => {
      const items = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : 0;
      setCart(items || []);
    })
  }, []);

  const groups = cart.length === 0 ? [] : _.groupBy(cart, 'menuName');

  // console.log('this is the cart and groups', cart, groups, Object.keys(groups));

  return (
    <>
      <div className="text-2xl">Cart</div>
      <div> Total Items: <span className="text-xl">{cart.length}</span></div>

      {Object.keys(groups)
        .map((key, i) => {
          return (
            <div className={styles.cartCard}>
              {/* <div className="flex-col w-8/12 basis-8/12"> */}
                <div className={styles.menuName}>{key}</div>
                <div className={styles.price}>
                <span className="">${parseInt(groups[key][0]['price'].substring(1)) * groups[key].length}</span>
                </div>
              {/* </div> */}
              <div className={styles.quantity}>
                <div className="flex-row flex align-middle border-r-emerald-400 rounded-full border-2">
                  <div className={styles.adjustQuantityDiv}><HiChevronDown /></div>
                  <div className="text-lg">{groups[key].length}</div>
                  <div className={styles.adjustQuantityDiv}><HiChevronUp /></div>
                </div>
              </div>
            </div>
          )
        })
      }

    </>
  )
}

  export default CartDetails;
