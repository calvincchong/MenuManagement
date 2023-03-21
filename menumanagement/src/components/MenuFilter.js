'use client';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategory } from '../store/reducers/menuCategorySlice';

const MenuFilter = ({ categories }) => {
  const selectedCategory = useSelector((state) => state.menuCategory);
  const dispatch = useDispatch();

  return (
  <div className="w-3/12 flex-col m-3">
    <h3>Categories</h3>
    <div>
    Selected category: {selectedCategory.value}
    </div>

    <div>
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
           <span className='inline indent-1.5'> {category} </span>
          </label>
        </div>)
      })}
    </div>

  </div>)
}

export default MenuFilter;