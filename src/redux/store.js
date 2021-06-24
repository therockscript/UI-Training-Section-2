
import { configureStore } from '@reduxjs/toolkit';
import studentSlice from './studentSlice';
import ticTacToeSlice from './ticTacToeSlice';
import loginSlice from './loginSlice';

export default configureStore({
    reducer: {
        student: studentSlice,
        ticTacToe: ticTacToeSlice,
        login: loginSlice
    }    
})