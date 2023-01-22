import {createSlice} from '@reduxjs/toolkit';
import {DocumentData} from 'firebase/firestore';

import {Movie} from '@/typings';

const initialState: {currentMovie: Movie | DocumentData | null} = {
  currentMovie: null,
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setCurrentMovie: (state, action) => {
      state.currentMovie = action.payload;
    },
  },
});

export default moviesSlice.reducer;
export const {setCurrentMovie} = moviesSlice.actions;
