import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface LoginState {
  isLoggedIn: boolean;
  user: any | null;
}

const initialState: LoginState = {
  isLoggedIn: false,
  user: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLoginState(
      state,
      action: PayloadAction<{isLoggedIn: boolean; user: any}>,
    ) {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.user = action.payload.user;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const {setLoginState, logout} = loginSlice.actions;
export default loginSlice.reducer;
