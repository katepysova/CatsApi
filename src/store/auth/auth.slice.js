import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    isRestored: false
  },
  reducers: {
    getToken: () => {},
    setToken: (state, action) => {
      state.token = action.payload;
      state.isRestored = true;
    }
  }
});

export const { getToken, setToken } = authSlice.actions;

export default authSlice.reducer;
