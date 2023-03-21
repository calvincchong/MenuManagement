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

  /**
   * @param {object} key : entire item object to add to cart
   * @returns {void} : sideeffect updates cart state and localstorage with additional item
   */
  const incrementItem = ( key ) => {
    setCart([...cart, key]);
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  /**
   * @param {object} key : entire item object to add to cart
   * @returns {void} : sideeffect removes item from updates cart state and localstorage. CartState triggers re-render.
   */
  const decrementItem = ( key ) => {
    let index = cart.findIndex((item) => item.menuName === key.menuName);
    let newCart = [...cart.slice(0, index), ...cart.slice(index + 1)];
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCart(newCart);
  };

  return (
    <>
      <div className="text-2xl">Cart</div>
      <div> Total Items: <span className="text-xl">{cart.length}</span></div>

      {Object.keys(groups)
        .map((key, i) => {
          return (
            <div key={'cartitem'+key} className={styles.cartCard}>
              {/* <div className="flex-col w-8/12 basis-8/12"> */}
                <div className={styles.menuName}>{key}</div>
                <div className={styles.price}>
                <span className="">${parseInt(groups[key][0]['price'].substring(1)) * groups[key].length}</span>
                </div>
              {/* </div> */}
              <div className={styles.quantity}>
                <div className="flex-row flex align-middle border-slate-200 rounded-full border-2 hover:bg-orange-100">
                  <div
                    className={styles.adjustQuantityDiv}
                    onClick={() => {decrementItem(groups[key][0])}}
                  >
                    <HiChevronDown />
                  </div>
                  <div className="text-lg">{groups[key].length}</div>
                  <div
                    className={styles.adjustQuantityDiv}
                    onClick={() => {incrementItem(groups[key][0])}}
                  >
                    <HiChevronUp />
                  </div>
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
