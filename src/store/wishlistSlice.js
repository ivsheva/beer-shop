import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const wishSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    ADD_TO_WISH: (cart, action) => {
      cart.push({ id: ++lastId, ...action.payload });
    },
    REMOVE_FROM_WISH: (cart, action) => {
      return cart.filter((cartItem) => cartItem.id !== action.payload);
    },
  },
});

export const { ADD_TO_WISH, REMOVE_FROM_WISH } = wishSlice.actions;

export default wishSlice.reducer;
