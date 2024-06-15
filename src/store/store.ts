import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './theme/ThemeSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const AppDispatch = typeof store.dispatch;
