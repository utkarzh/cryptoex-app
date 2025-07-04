import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action: PayloadAction<{ isAuth: boolean }>) => {
      localStorage.setItem(
        "indoex_userauthentication",
        action.payload.isAuth.toString()
      );
      state.isAuth = action.payload.isAuth;
    },
    userLoggedOut: (state) => {
      // Clear the authentication state
      localStorage.removeItem("indoex_userauthentication");
      state.isAuth = false; // Reset isAuth to false
    },
  },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;

export default authSlice.reducer;
