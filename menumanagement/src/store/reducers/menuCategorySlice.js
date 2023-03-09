import { createSlice } from '@reduxjs/toolkit';

const initialState ={
  value: '',
}

const menuCategorySlice = createSlice({
  name: 'selectCategory',
  initialState,
  reducers: {
    selectCategory: (state, action) => {
      console.log('this is working');
      console.log('state, and action', {
        state,
        action
      })
     state.value = action.payload;
    }
  }
});

export const { selectCategory } = menuCategorySlice.actions;

export default menuCategorySlice.reducer;