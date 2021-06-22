import { useDispatch, useSelector } from "react-redux";
import classnames from 'classnames';

function Box(props) {
    const disptach = useDispatch();
    const message = useSelector(state => state.ticTacToe.message);

    function onBoxClick() {
        if (props.value) return;
        if (message) return;

        disptach({
            type: "ticTacToe/setBoxValue",
            payload: {
                row: props.row,
                column: props.column
            }
        });
    }

    const classes = classnames({
        "col border p-3 text-center": true,
        "alert alert-danger": props.value === "O",
        "alert alert-success": props.value === "X"
    })

    return <div 
        className={classes}
        onClick={onBoxClick}>
        {props.value}
    </div>
}

export default Box;