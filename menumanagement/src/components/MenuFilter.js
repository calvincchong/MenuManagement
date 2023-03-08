'use client';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategory } from '../store/reducers/menuCategorySlice';


const MenuFilter = ({ categories }) => {
  const selectedCategory = useSelector((state) => state.menuCategory);
  const dispatch = useDispatch();

  console.log('is categories passed', categories)

  return (
  <div className="w-4/12 flex-col m-3">
    <h3>Categories</h3>
    <div>
    Selected category: {selectedCategory.value}
    </div>

    {categories.map((category, i) => {
      return(
      <div key={`cSelect_${category}`}>
        <input
          type="checkbox"
          name={category}
          value={category}
          checked= {selectedCategory.value === category ? true : false}
          onChange={(e) => {
            if (selectedCategory.value === e.target.name) {
              dispatch(selectCategory('All Items'))
            } else {
              dispatch(selectCategory(e.target.name))
            }
          }}
        />

        <label>
          {category}
        </label>
      </div>)
    })}
  </div>)
}

export default MenuFilter;