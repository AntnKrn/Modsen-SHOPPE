import { createSlice } from '@reduxjs/toolkit';

import { clearCookieByName, getCookieByName } from '../../../utils/cookie';

interface IAuth {
  isAuth: boolean;
  email: string | null;
  uuid: string | null;
}

const initialState: IAuth = {
  isAuth: getCookieByName('bearer') ? true : false,
  email: localStorage.getItem('email') ? localStorage.getItem('email') : null,
  uuid: localStorage.getItem('uuid') ? localStorage.getItem('uuid') : null,
};

export const authSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isAuth = true;
      state.email = action.payload.email;
      state.uuid = action.payload.uuid;
      document.cookie = 'bearer=' + action.payload.token;
      localStorage.setItem('uuid', action.payload.uuid);
      localStorage.setItem('email', action.payload.email);
    },
    clearUser: (state) => {
      state.isAuth = false;
      state.email = null;
      state.uuid = null;
      localStorage.removeItem('uuid');
      localStorage.removeItem('email');
      clearCookieByName('bearer');
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
