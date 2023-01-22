import {configureStore} from '@reduxjs/toolkit';

import modalReducer from '@/components/Modal/modalSlice';
import moviesReducer from '@/components/Row/moviesSlice'

export const store = configureStore({
  reducer: {
    showModal: modalReducer,
    movies: moviesReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
