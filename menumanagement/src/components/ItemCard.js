'use client';

import styles from '../styles/ItemCard.module.css';
import { IoBagAdd } from 'react-icons/io5';
import { IoAddCircleSharp } from 'react-icons/io5'



const ItemCard = ({item}) => {
  const description = item.description.length === 0 ? null: item.description;

  const addItemToLocalStorage = () => {
  // console.log('hello', item);
  if (typeof window !== 'undefined') {
    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('addItemToCart')); // Mechanism to update cart displaying number of items
  }
}

  return (
      <div className={styles.box}>
        <h3 className={styles.menuName}>{item.menuName}</h3>
        <div className={styles.price}>
          <p>{item.price}</p>
        </div>
        <p className={styles.description}>{description}</p>
        <IoAddCircleSharp
          className={styles.cartButton}
          onClick={addItemToLocalStorage}
        />
      </div>
  )
}

module.exports = {
  'ItemCard': ItemCard
}