import {configureStore} from '@reduxjs/toolkit';
import ticTactoeSlice from './ticTactoeSlice';
import LoginSlice from './loginSlice';


export default configureStore({
	reducer:{
		ticTacToe : ticTactoeSlice,
		login : LoginSlice
	}
})