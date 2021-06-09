function ToDoItem(props) {
    console.log(props)

    return <li>
        {props.text}
    </li>;
}

export default ToDoItem;