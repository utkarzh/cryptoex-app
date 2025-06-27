import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // userRegistration: (state, action: PayloadAction<{ token: string }>) => {
    //   state.token = action.payload.token;
    // },

    userLoggedIn: (state, action: PayloadAction<{ isAuth: boolean }>) => {
      localStorage.setItem(
        "indoex_userauthentication",
        action.payload.isAuth.toString()
      );
      state.isAuth = action.payload.isAuth;
    },
    // userLoggedOut: (state) => {
    //   // state.token = "";
    //   // state.user = "";
    // },
  },
});

export const { userLoggedIn } = authSlice.actions;

export default authSlice.reducer;
