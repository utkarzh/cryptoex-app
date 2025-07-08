import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Check for session from localStorage once
const isSessionActive =
  typeof window !== "undefined" &&
  !!localStorage.getItem("indoex_userauthentication");

const initialState = {
  isAuth: isSessionActive,
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
      localStorage.removeItem("indoex_userauthentication");
      state.isAuth = false;
    },
  },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;
