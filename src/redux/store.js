
import { configureStore } from '@reduxjs/toolkit';
import studentSlice from './studentSlice';

export default configureStore({
    reducer: {
        student: studentSlice
    }
})