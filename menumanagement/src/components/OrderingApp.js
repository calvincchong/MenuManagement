'use client';
import { useState } from 'react';
import { CategoryItems } from './CategoryItems';
import { ItemCard } from './ItemCard';
import styles from '../styles/OrderingApp.module.css';
import tcss from '../styles/globaltailwind';
import MenuFilter from './MenuFilter';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategory } from '../store/reducers/menuCategorySlice';

const headerTCSS = "flex relative justify-center place-content-center min-h-xxxvh bg-center bg-fixed bg-contain bg-origin-border bg-[url(https://res.cloudinary.com/dq6rqplja/image/upload/v1678385134/Koo%20Koo%20Chicken/kkc-top-down-menu-item_seijj1.jpg)] min-h-fit min-h-20"

// maps across the categories and returns a section for each set of items
const OrderingApp = ({items, categories}) => {
  const selectedCategory = useSelector((state) => state.menuCategory);
  const dispatch = useDispatch();

  const filterCategories = (category) => {
    if (selectedCategory.value === 'All Items') {
      return true;
    }
    return category === selectedCategory.value;
  };

  return (
    <>
    <div className={headerTCSS}>
      <div className="absolute top-1/4 text-center">
        <div>
          <h1 className={tcss.h1white}>
          Our Menu
          </h1>
        </div>
        <div className="text-slate-50">
          Homemade Malaysian Food - no passport needed
        </div>
        <div className="text-slate-50 py-2">
          Call 718-827-1698 to place your order.
        </div>
      </div>
    </div>
    <div className='flex flex-row py-3'>
      <MenuFilter categories={categories} />
      <div className='w-9/12'>
         {categories.filter(filterCategories).map((category, i) => {

          const itemsByCategory = items.filter(item => {
            return item.category === category;
          });

          return (
            <div id={category} className={styles.categorySections} key={`header-${i}`}>
              <div className='py-2'>
                <h2 className={tcss.h4}>{category}</h2>
              </div>
              {/* <p> Some category description here </p> */}
              <CategoryItems items={itemsByCategory} />
            </div>
          )
         })}
      </div>
    </div>
    </>
  )
}

export default OrderingApp;
