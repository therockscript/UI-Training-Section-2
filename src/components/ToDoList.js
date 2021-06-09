import ToDoListJson from '../data/todo-list.json';
import ToDoItem from './ToDoItem';

function ToDoList(props) {
    console.log(ToDoListJson);
    return <div>
        {props.title}
        <ul>
            {/* <ToDoItem text="Item 1"></ToDoItem>
            <ToDoItem text="Item 2"></ToDoItem>
            <ToDoItem text="Item 3"></ToDoItem>
            <ToDoItem text="Item 4"></ToDoItem>
            <ToDoItem text="Item 5"></ToDoItem> */}
            {
                ToDoListJson.map(
                    function(item) {
                        return <ToDoItem text={item.title}></ToDoItem>
                    }
                )
            }
        </ul>
    </div>;
}

export default ToDoList;