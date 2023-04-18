import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedItem: null,
  selectedCategory: null,
  showForm: false,
  submitForm: false
}

const editItemSlice = createSlice({
  name: 'editItem',
  initialState,
  reducers: {
    selectItem: (state, action) => {
      state.value = action.payload;
    },
    selectCategory: (state, action) => {
      state.value = action.payload;
    },
    toggleForm: (state, action) => {
      state.value = !state.value;
    },
  }
})

export const { selectItem, selectCategory, toggleForm } = editItemSlice.actions;

export default editItemSlice.reducer;