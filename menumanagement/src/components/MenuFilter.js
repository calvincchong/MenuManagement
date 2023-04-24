'use client';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategory } from '../store/reducers/menuCategorySlice';
import styles from '../styles/MenuFilter.module.css';

// filters cart items by category
const MenuFilter = ({ categories }) => {
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
    <div
      // className='w-12/12 sm:w-3/12 flex-col m-3 sticky top-0 self-start bg-white overflow-auto h-fit'
      className="sticky top-[3.4em] bg-white z-20 opacity-100 mt-4 mr-0 sm:mr-4"
    >
      <div className="text-xs sm:text-m">
        Selected: {selectedCategory.value}
      </div>

      <div className={styles.box}>
        {categories.map((category, i) => {
          let bgStyle =
            selectedCategory.value === category
              ? `${styles.categoryContainer} ${styles.selected}`
              : styles.categoryContainer;

          return (
            <div
              key={`cSelect_${category}`}
              onClick={() => {
                settingCategory(category);
              }}
              className={styles.categoryContainer}
              className={bgStyle}
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

              <label>
                <span className="inline indent-2 text-xs tracking-tight break-words sm:text-base">
                  {' '}
                  {category}{' '}
                </span>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuFilter;
