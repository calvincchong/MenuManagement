import { configureStore } from '@reduxjs/toolkit';
import menuCategoryReducer from './reducers/menuCategorySlice';
import cartReducer from './reducers/cartSlice';
import selectItemReducer from './reducers/selectItemSlice';
import editItemReducer from './reducers/editItemSlice';

const store = configureStore({
  reducer: {
   menuCategory: menuCategoryReducer,
   cart: cartReducer,
   item: selectItemReducer,
   editItem: editItemReducer,
  },
})

export default store;