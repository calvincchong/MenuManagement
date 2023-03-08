import { configureStore } from '@reduxjs/toolkit';
import menuCategoryReducer from './reducers/menuCategorySlice';

const store = configureStore({
  reducer: {
    menuCategory: menuCategoryReducer,
  },
})

export default store;