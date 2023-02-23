'use client';
import { useState } from 'react';
import { CategoryItems } from './CategoryItems';
import { ItemCard } from './ItemCard';
import styles from '../styles/OrderingApp.module.css'

const OrderingApp = ({items, categories}) => {

  return (
    <div className={styles.menuSection}>
        {categories.map((category, i) => {
          const itemsByCategory = items.filter(item => {
            return item.category === category;
          })

          return (
            <div id={category} className={styles.categorySections}>
              <div>
                <h2>{category}</h2>
              </div>
              <CategoryItems items={itemsByCategory} />
            </div>
          )}
        )}
    </div>
  )
}

export default OrderingApp;