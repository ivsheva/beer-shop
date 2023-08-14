import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    LOGIN: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    LOGOUT: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { LOGIN, LOGOUT } = authSlice.actions;

export const getIsLoggedIn = (state) => state.auth.isLoggedIn;
export const getUser = (state) => state.auth.user;

export default authSlice.reducer;
