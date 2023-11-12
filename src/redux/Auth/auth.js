import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateAuthentication: (state) => {
      state.isAuthenticated = true;
      console.log("Log state of auth", state);
    },
  },
});

export const { updateAuthentication } = authSlice.actions;

export default authSlice.reducer;
