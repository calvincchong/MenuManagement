'use client';
import { useState } from 'react';
import { CategoryItems } from './CategoryItems';
import { ItemCard } from './ItemCard';
import styles from '../styles/OrderingApp.module.css'
import MenuFilter from './MenuFilter';

// maps across the categories and returns a section for each set of items
const OrderingApp = ({items, categories}) => {
  const [selectedCategory, setSelectedCategory] = useState('All Items');

  return (
    <div className='flex flex-row'>
    <MenuFilter />
    <div className="w-8/12">
        {categories.map((category, i) => {
          const itemsByCategory = items.filter(item => {
            return item.category === category;
          })

          return (
            <div id={category} className={styles.categorySections} key={`header-${i}`}>
              <div>
                <h2>{category}</h2>
              </div>
              <CategoryItems items={itemsByCategory} />
            </div>
          )}
        )}
    </div>
    </div>
  )
}

export default OrderingApp;