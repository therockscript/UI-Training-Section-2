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
        "col border border-secondary p-3 text-center": true,
        " mr-1 ml-1 mb-2 bg-success text-white": props.value === "O",
        "mr-1 ml-1 mb-2 bg-danger text-white": props.value === "X"
    })

    return <div 
        className={classes}
        onClick={onBoxClick}>
        {props.value}
    </div>
}

export default Box;