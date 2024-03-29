'use client';

import styles from '../styles/ItemCard.module.css';
import { IoBagAdd, IoAddCircleSharp } from 'react-icons/io5';
import { addItemToCartAndSetStorage } from '../lib/controllers/calculateCart';
import { useSelector, useDispatch } from 'react-redux';
import { selectItem } from '../store/reducers/selectItemSlice';

const ItemCard = ({ item }) => {
  const description = item.description.length === 0 ? null : item.description;
  const dispatch = useDispatch();

  const addItemToLocalStorage = () => {
    if (typeof window !== 'undefined') {
      let cart =
        localStorage.getItem('cart') !== undefined
          ? JSON.parse(localStorage.getItem('cart'))
          : [];
      [...cart, item];
      localStorage.setItem('cart', JSON.stringify(cart));
      window.dispatchEvent(new Event('addItemToCart')); // Mechanism to update cart displaying number of items
    }
  };

  return (
    <div className={styles.box}>
      <h3
        className={styles.menuName}
        onClick={() => {
          dispatch(selectItem(item));
        }}
      >
        {item.menuName}
      </h3>
      <div className={styles.price}>
        <p>{item.price}</p>
      </div>
      {/* {description !== "" ? (
        <p className={styles.description}>{description}</p>
      ) : null} */}
      <IoAddCircleSharp
        className={styles.cartButton}
        // onClick={addItemToLocalStorage}
        onClick={() => {
          addItemToCartAndSetStorage(item);
        }}
      />
    </div>
  );
};

module.exports = {
  ItemCard: ItemCard,
};
