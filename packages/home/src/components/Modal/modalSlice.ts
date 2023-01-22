import {createSlice} from '@reduxjs/toolkit';

const initialState = false;

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal: (state, action) => {
      state = action.payload;
    },
  },
});

export default modalSlice.reducer;
export const {showModal} = modalSlice.actions;
