import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { busketApi } from './api/busket/busket';
import { productApi } from './api/products/product';
import authReducer from './features/auth/authSlice';
import filterReducer from './features/filter/filterSlice';
import searchReducer from './features/search/searchSlice';
import themeReducer from './features/theme/themeSlice';
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    filter: filterReducer,
    search: searchReducer,
    auth: authReducer,
    [productApi.reducerPath]: productApi.reducer,
    [busketApi.reducerPath]: busketApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      productApi.middleware,
      busketApi.middleware,
    ]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
