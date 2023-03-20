import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "breeds",
  initialState: {
    breeds: null
  },
  reducers: {
    getBreeds: () => {},
    setBreeds: (state, action) => {
      state.breeds = action.payload;
    }
  }
});

export const { getBreeds, setBreeds } = authSlice.actions;

export default authSlice.reducer;
