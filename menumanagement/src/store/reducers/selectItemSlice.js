import { createSlice } from '@reduxjs/toolkit';

// if state not null then an item has been selected.
// if state is null, then no categories.
// TODO: consider having a list of added options to the state.
const initialState = {
  value: false,
  quantity: 1,
  options: [], // by default empty array to enable backwards compatability.
};

// to do in Item Slice is to add options, select options and set price.
const selectItemSlice = createSlice({
  name: 'itemDetails',
  initialState,
  reducers: {
    selectItem: (state, action) => {
      state.value = action.payload;
    },
    addOption: (state, action) => {
      // option selected value to true;
      // increment total price of item by option cost;
      state = action.payload;
    },
    removeOption: (state, action) => {
      // remove option selected value to false;
      // decrement total price of item by option cost;
      state = action.payload;
    }
  }
});

export const { selectItem, addOption, removeOption } = selectItemSlice.actions;

export default selectItemSlice.reducer;