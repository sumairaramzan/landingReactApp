// src/features/cardSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "cards",
  initialState: {
    items: [],
    loading: false,
    error: null,
    cart: [],
  },
  reducers: {
    fetchCardsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchCardsSuccess: (state, action) => {
      state.loading = false;
      state.items = action.payload;
    },
    fetchCardsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addToCart: (state, action) => {
        const existingItem = state.cart.find(item => item.id === action.payload.id);
        if (existingItem) {
          existingItem.quantity += 1; // Increase quantity if already in cart
        } else {
          state.cart.push({ ...action.payload, quantity: 1 }); // Add new item with quantity 1
        }
      },
  },
});

export const { fetchCardsRequest, fetchCardsSuccess, fetchCardsFailure,addToCart } = cardSlice.actions;
export default cardSlice.reducer;
