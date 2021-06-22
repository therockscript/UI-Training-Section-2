import { configureStore } from '@reduxjs/toolkit';
import ticTacToeSlice from './ticTacToeSlice';

export default configureStore({
    reducer: {
        ticTacToe: ticTacToeSlice
    }
})