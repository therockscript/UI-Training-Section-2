import {createSlice} from '@reduxjs/toolkit';

const blankBoard= [
   [null, null, null],
   [null, null, null],
   [null, null, null]
]


const ticTactoeSlice = createSlice({
	name :"ticTacToe",
	initialState :{
		boxes : blankBoard,
		message : "",
	    currentPlayer: "O",
	    showRestartButton: false
	},
	reducers :{
		setBoxValue :(state, action)=> {
			state.boxes[action.payload.row][action.payload.column]=state.currentPlayer;

			 if(state.currentPlayer === "O"){
			 	state.currentPlayer = "X";
			 } else {
			 	state.currentPlayer ="O";
			 }

			 const gameStatus = checkGame(state.boxes);
			   if(gameStatus === "p1"){
			   	  state.message ="Player 1 Win !!!";

			   }else if(gameStatus === "p2"){
                 state.message ="Player 2 Win !!!";
			   
			   }else if(gameStatus === "draw"){
                state.message ="Match Draw !!!";
			   }

			   if(state.message){
			   	state.showRestartButton=true;
			   }


		},

		startGame: (state, action)=>{
			state.boxes =blankBoard;
			state.currentPlayer= "O"
			state.message="";
			state.showRestartButton=false;
		}


	}
})

function checkGame(box_array) {
	// check all rows for winner
	for (let i=0; i<box_array.length; i++) {
		if (box_array[i][0] == box_array[i][1] &&
		box_array[i][0] == box_array[i][2]) {
			if (box_array[i][0] == "O") {
				return "p1";
			} else if (box_array[i][0] == "X") {
				return "p2";
			}
		}
	}
	
	// check all columns for winner
	for (let i=0; i<box_array.length; i++) {
		if (box_array[0][i] == box_array[1][i] &&
		box_array[0][i] == box_array[2][i]) {
			if (box_array[0][i] == "O") {
				return "p1";
			} else if (box_array[0][i] == "X") {
				return "p2";
			}
		}
	}
	
	// check for diagonal top left to bottom right
	if (box_array[0][0] == box_array[1][1] &&
	box_array[0][0] == box_array[2][2]) {
		if (box_array[0][0] == "O") {
			return "p1";
		} else if (box_array[0][0] == "X") {
			return "p2";
		}
	}
	
	// check for diagonal top right to bottom left
	if (box_array[0][2] == box_array[1][1] &&
	box_array[1][1] == box_array[2][0]) {
		if (box_array[0][2] == "O") {
			return "p1";
		} else if (box_array[0][2] == "X") {
			return "p2";
		}
	}
	
	let counter = 0;
	for (let i=0; i<box_array.length; i++) {
		for (let j=0; j<box_array[i].length; j++) {
			if (box_array[i][j] != null) {
				counter++;
			}
		}
	}
	
	if (counter == 9) {
		return "draw";
	}
	
	return "";
}
export default ticTactoeSlice.reducer;