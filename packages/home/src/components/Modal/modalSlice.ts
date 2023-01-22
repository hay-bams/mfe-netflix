import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  show: false
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal: (state, action) => {
      console.log(action, '|||||')
      state.show = action.payload;
    },
  },
});

export default modalSlice.reducer;
export const {showModal} = modalSlice.actions;
