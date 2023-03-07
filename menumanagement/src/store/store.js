import { configureStore } from '@reduxjs/toolkit';
import menuSlice from './reducers/menu';

const store = configureStore({
  reducer: {
    menu: menuSlice
  }
})

export default store;