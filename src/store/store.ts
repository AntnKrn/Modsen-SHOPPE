import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './features/theme/themeSlice';
import filterReducer from './features/filter/filterSlice';
import { productApi } from './api/products/product';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    [productApi.reducerPath]: productApi.reducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
