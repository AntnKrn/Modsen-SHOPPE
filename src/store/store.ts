import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './features/theme/themeSlice';
import filterReducer from './features/filter/filterSlice';
import searchReducer from './features/search/searchSlice';
import { productApi } from './api/products/product';
import { setupListeners } from '@reduxjs/toolkit/query';
import { busketApi } from './api/busket/busket';
import authReducer from './features/auth/authSlice';
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
