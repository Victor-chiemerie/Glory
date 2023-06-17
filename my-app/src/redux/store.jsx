import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../redux/slice/ThemeSlice'

export const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
  });
