import { createSlice } from "@reduxjs/toolkit";

const getCart = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getCart(),
  reducers: {
    ADD_TO_CART: (cart, action) => {
      // update cart
      cart.push({ ...action.payload });

      // set updated cart to localStorage
      localStorage.setItem("cart", JSON.stringify(cart));
    },
    REMOVE_FROM_CART: (cart, action) => {
      // get updated cart
      const updatedCart = cart.filter(
        (cartItem) => cartItem.id !== action.payload
      );

      localStorage.setItem("cart", JSON.stringify(updatedCart));

      return updatedCart;
    },
  },
});

export const { ADD_TO_CART, REMOVE_FROM_CART } = cartSlice.actions;

export default cartSlice.reducer;
