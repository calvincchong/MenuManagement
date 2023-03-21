import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false,
}

const cartSlice = createSlice({
  name: 'toggleCart',
  initialState,
  reducers: {
    toggleCart: (state, action) => {
      state.value = !state.value;
    }
  },
});

// toggle cart actions for
export const { toggleCart } = cartSlice.actions;
export default cartSlice.reducer;
