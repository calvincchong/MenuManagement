'use client';

import styles from '../styles/ItemCard.module.css';
import { IoBagAdd } from 'react-icons/io5';
import { IoAddCircleSharp } from 'react-icons/io5'

const ItemCard = ({item}) => {
  const description = item.description.length === 0 ? null: item.description;

  return (
      <div className={styles.box}>
        <h3 className={styles.menuName}>{item.menuName}</h3>
        <div className={styles.price}>
          <p>{item.price}</p>
        </div>
        <p className={styles.description}>{description}</p>
        <IoAddCircleSharp className={styles.cartButton} />
      </div>


  )
}

module.exports = {
  'ItemCard': ItemCard
}