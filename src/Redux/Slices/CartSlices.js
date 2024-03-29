import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    add: (state, action) => {
      const existingItem = state.find(item => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    remove: (state, action) => {
      const index = state.findIndex(item => item.id === action.payload.id);

      if (index !== -1) {
        state[index].quantity -= 1;
        if (state[index].quantity === 0) {
          state.splice(index, 1);
        }
      }
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
