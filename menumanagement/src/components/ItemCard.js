'use client';

import styles from '../styles/ItemCard.module.css';

const ItemCard = ({item}) => {
  const description = item.description.length === 0 ? null: item.description;

  return (
      <div className={styles.box}>
        <h3 className={styles.menuName}>{item.menuName}</h3>
        <div className={styles.price}>
          <p>{item.price}</p>
        </div>
          <p className={styles.description}>{description}</p>
      </div>
  )
}

module.exports = {
  'ItemCard': ItemCard
}