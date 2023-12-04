import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const getWishlist = () => {
  const wishlist = localStorage.getItem("wishlist");
  return wishlist ? JSON.parse(wishlist) : [];
};

const wishSlice = createSlice({
  name: "wishlist",
  initialState: getWishlist,
  reducers: {
    ADD_TO_WISH: (wishlist, action) => {
      wishlist.push({ id: ++lastId, ...action.payload });

      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    },
    REMOVE_FROM_WISH: (wishlist, action) => {
      const updatedWishlist = wishlist.filter(
        (cartItem) => cartItem.id !== action.payload
      );

      localStorage.setItem("wishlist", updatedWishlist);

      return updatedWishlist;
    },
  },
});

export const { ADD_TO_WISH, REMOVE_FROM_WISH } = wishSlice.actions;

export default wishSlice.reducer;
