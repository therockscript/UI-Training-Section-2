
import { configureStore } from '@reduxjs/toolkit';
import studentSlice from './studentSlice';
import ticTacToeSlice from './ticTacToeSlice';

export default configureStore({
    reducer: {
        student: studentSlice,
        ticTacToe: ticTacToeSlice
    }
})