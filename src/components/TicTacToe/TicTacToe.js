import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from './Box';

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
        TicTacToe
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
        
        <p>{message}</p>
        {showRestartButton && 
            <button onClick={onRestart}>Restart</button>
        }
        
    </div>
}

export default TicTacToe;