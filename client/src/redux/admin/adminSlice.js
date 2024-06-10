import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  isError: false,
  error: undefined,
  isAdminLogged: false
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    logInStart: (state) => {
      state.loading = true;
      state.isError = false;
    },
    logInSuccess: (state) => {
      state.loading = false;
      state.isError = false;
      state.isAdminLogged = true;
    },
    logInFailure: (state, action) => {
      state.loading = false;
      state.isError = true;
      state.error = action.payload;
    },
    SignOutSuccess: (state) => {
      state.isAdminLogged = false;
    }
  }
});

export const { logInStart, logInSuccess, logInFailure, SignOutSuccess } = adminSlice.actions;
export default adminSlice.reducer;
