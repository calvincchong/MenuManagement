import { configureStore } from '@reduxjs/toolkit';
import menuCategoryReducer from './reducers/menuCategorySlice';
import cartReducer from './reducers/cartSlice';
import selectItemReducer from './reducers/selectItemSlice';

const store = configureStore({
  reducer: {
   menuCategory: menuCategoryReducer,
   cart: cartReducer,
   item: selectItemReducer
  },
})

export default store;