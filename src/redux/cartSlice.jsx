import { createSlice } from '@reduxjs/toolkit';

// Load cart items from localStorage when the app initializes
const initialState = {
  items: JSON.parse(localStorage.getItem('cart')) || [], // Load cart from localStorage or initialize as empty array
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem('cart', JSON.stringify(state.items)); // Save the updated cart to localStorage
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      localStorage.setItem('cart', JSON.stringify(state.items)); // Save the updated cart to localStorage
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.setItem('cart', JSON.stringify(state.items)); // Clear the cart in localStorage
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
