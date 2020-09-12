import { createSlice } from '@reduxjs/toolkit';

export const boardReducer = createSlice({
  name: 'boardReducer',
  initialState: {
    layers:[
      {
        title : "",
        cards : []
      }
    ]
  },
  reducers: {
    test: state => {
      console.log("HELLO");
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const selectBoardState = state => {
  return state.board;
}
export const {test, incrementByAmount} = boardReducer.actions;
export default boardReducer.reducer;
