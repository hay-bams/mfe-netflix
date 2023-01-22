import {createSlice} from '@reduxjs/toolkit';
import { DocumentData } from 'firebase/firestore'

import { Movie } from '@/typings';

const initialState: Movie | DocumentData | null  = null

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    list: () => {},
  },
});

export default moviesSlice.reducer;
export const {list} = moviesSlice.actions;
