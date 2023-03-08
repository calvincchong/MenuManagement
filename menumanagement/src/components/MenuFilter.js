'use client';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategory } from '../store/reducers/menuCategorySlice';


const MenuFilter = ({ categories }) => {
  const selectedCategory = useSelector((state) => state.menuCategory);
  const dispatch = useDispatch();

  return (
  <div className="w-4/12 flex-col">
    menu filter
    <div>

    this is the selected category: {selectedCategory.value}
    </div>

    <label>
      Appetizers

      <input
        type="checkbox"
        name="category"
        value="Appetizers"
        onClick={() => dispatch(selectCategory('Appetizers'))}
      />
    </label>

    <label>
      Soups To Share

      <input
        type="checkbox"
        name="soupstoshare"
        value="soupstoshare"
        checked= {selectedCategory.value === 'soupstoshare' ? true : false}
        // onClick={(e) => dispatch(selectCategory(e.name))}
        onChange={(e) => {
          if (selectedCategory.value === e.target.name) {
            dispatch(selectCategory('All Items'))
          } else {
            dispatch(selectCategory(e.target.name))
          }
        }}
      />
    </label>
  </div>)
}

export default MenuFilter;