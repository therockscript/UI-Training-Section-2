import { useState } from "react";
import "./ToDoItem.css";

function ToDoItem(props) {
  console.log(props);
  // props.text = "test";

  const [name, setName] = useState("Alice");
  const [address, setAddress] = useState({});
  const [counter, setCounter] = useState(0);

  function changeName() {
    setName("RockScript");
    changeAddress();
  }

  function changeAddress() {
    setAddress({
      city: "NYC",
      state: "NY",
    });
  }

  function incrementCounter() {
    setCounter(counter + 1);
  }

  function onNameChange(event) {
    // alert(event.target.value);
    setName(event.target.value);
  }

  return (
    <li>
      <div style={{ background: "red" }}>{counter}</div>
      <div className="counter">{props.text}</div>
      <div>{name}</div>
      <div>{address.city}</div>
      <div>{address.state}</div>
      <div>
        <button type="button" onClick={changeName}>
          Change Name
        </button>
      </div>
      <div>
        <button type="button" onClick={incrementCounter}>
          Increment
        </button>
      </div>
      <div>
        <input type="text" value={name} onChange={onNameChange} />
      </div>
    </li>
  );
}

export default ToDoItem;
