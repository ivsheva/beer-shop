import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    ADD_TO_CART: (cart, action) => {
      cart.push({ id: ++lastId, ...action.payload });
    },
    REMOVE_FROM_CART: (cart, action) => {
      return cart.filter((cartItem) => cartItem.id !== action.payload);
    },
  },
});

export const { ADD_TO_CART, REMOVE_FROM_CART } = cartSlice.actions;

export default cartSlice.reducer;
