import { configureStore } from '@reduxjs/toolkit';
import menuCategoryReducer from './reducers/menuCategorySlice';
import cartReducer from './reducers/cartSlice';

const store = configureStore({
  reducer: {
   menuCategory: menuCategoryReducer,
   cart: cartReducer,
  },
})

export default store;