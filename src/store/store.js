import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import cartReducer from "./cartSlice";
import wishListReducer from "./wishlistSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    wishlist: wishListReducer,
  },
});
