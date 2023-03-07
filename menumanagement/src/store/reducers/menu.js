import { createSlice } from '@reduxjs/toolkit';

const initialState ={
  value: 0,
}

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    SET_NAME(state, action) {
      state.name = action.payload;
    }
  }
});

export const { SET_NAME } = menuSlice.actions;

export default menuSlice.reducer;