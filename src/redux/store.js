import {configureStore} from '@reduxjs/toolkit';
import ticTactoeSlice from './ticTactoeSlice'

export default configureStore({
	reducer:{
		ticTacToe : ticTactoeSlice
	}
})