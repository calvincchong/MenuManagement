'use client';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategory } from '../store/reducers/menuCategorySlice';
import styles from '../styles/MenuFilterWithTransition.module.css';
import { motion } from 'framer-motion';

// filters cart items by category
const MenuFilterWithTransition = ({ categories }) => {
  const selectedCategory = useSelector(state => state.menuCategory);
  const dispatch = useDispatch();

  const settingCategory = category => {
    if (selectedCategory.value === category) {
      dispatch(selectCategory('All Items'));
    } else {
      dispatch(selectCategory(category));
    }
  };

  return (
    <div className="sticky top-[3.4em] bg-white z-20 opacity-100 mt-4 mr-0 sm:mr-4">
      <div className={styles['text-selected-category']}>
        Selected: {selectedCategory.value}
      </div>

      <div className={styles.box}>
        {categories.map((category, i) => {
          // let bgStyle =
          //   selectedCategory.value === category
          //     ? `${styles.categoryContainer} ${styles.selected}`
          //     : styles.categoryContainer;

          let activeFilter = selectedCategory.value === category ? true : false;

          return (
            <div
              key={`cSelect_${i}_${category}`}
              onClick={() => {
                settingCategory(category);
              }}
              className={styles.categoryContainer}
              // className={bgStyle}
            >
              <input
                type="checkbox"
                className={styles.checkbox}
                name={category}
                value={category}
                checked={selectedCategory.value === category ? true : false}
                onChange={e => {
                  settingCategory(e.target.value);
                }}
              />

              <label key={`label${category}`}>
                <span
                  key={`span-${category}`}
                  className="inline indent-2 text-xs tracking-tight break-words sm:text-base"
                >
                  {' '}
                  {category}{' '}
                </span>
              </label>
              {activeFilter && (
                <motion.div
                  key={`bubble_${category}`}
                  layoutId="bubble"
                  className={styles['bubble']}
                  // className="absolute h-1/5 z-[-1] w-1 bg-orange mix-blend-difference"
                  transition={{
                    type: 'spring',
                    bounce: 0.2,
                    duration: 0.8,
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuFilterWithTransition;
