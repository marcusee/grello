import { configureStore } from '@reduxjs/toolkit';
import boardReducer from '../components/boardReducer';

export default configureStore({
  reducer: {
    board : boardReducer
  },
});
