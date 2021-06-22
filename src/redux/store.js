import { configureStore } from '@reduxjs/toolkit';
import ticTacToeSlice from './TicTacToeSlice';

export default configureStore({
    reducer: {
        ticTacToe: ticTacToeSlice
    }
})