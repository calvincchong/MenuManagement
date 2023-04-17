import { createSlice } from '@reduxjs/toolkit';

// 'All Items' is fake category that will be used to display all items menuFilter uses this.
const initialState ={
  value: 'All Items',
}

const menuCategorySlice = createSlice({
  name: 'selectCategory',
  initialState,
  reducers: {
    selectCategory: (state, action) => {
      // console.log('this is working');
      // console.log('state, and action', {
      //   state,
      //   action
      // })
     state.value = action.payload;
    }
  }
});

export const { selectCategory } = menuCategorySlice.actions;

export default menuCategorySlice.reducer;