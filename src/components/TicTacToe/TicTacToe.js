import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from './box';

function TicTacToe(props) {
    const dispatch = useDispatch();
    const boxes = useSelector(state => state.ticTacToe.boxes);
    const message = useSelector(state => state.ticTacToe.message);
    const showRestartButton = useSelector(state => state.ticTacToe.showRestartButton);

    function onRestart() {
        dispatch({
            type: "ticTacToe/startGame",
            payload: null
        });
    }

    return <div>
        <center><h2 style={{color:"blue"}}>**TicTacToe Game**</h2></center>
        {
            boxes.map((row, i) => { 
                return <div className="row">
                    {
                        boxes[i].map((col, j) => {
                            return <Box row={i} column={j} value={boxes[i][j]}></Box>
                        })
                    }
                </div>
            })
        }
        
        <center><h3>{message}</h3></center>
        {showRestartButton && 
            <center><button onClick={onRestart} className="btn btn-primary">Restart</button></center>
        }
        
    </div>
}

export default TicTacToe;