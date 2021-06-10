import ToDoListJson from '../json_data/to_do_list.json';
import ToDoItem from './To_Do_Item';

function ToDoList(props){
	console.log(ToDoListJson);
	return <div>
	     {props.title}
	     <ul>
	         {
	         	ToDoListJson.map(
                        function(item){
                        	return <ToDoItem text={item.title}></ToDoItem>
                        }
	         		)
	         }
	      </ul>   
	</div>
}

export default ToDoList