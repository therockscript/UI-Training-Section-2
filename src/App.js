import './App.css';
import React, { useState } from 'react';
import ToDoList from './components/ToDoList';
import StateDemo from './components/StateDemo';
import GuessTheNumber from './components/game/GueesTheNumber';
import StudentManagement from './components/StudentManagement/StudentManagement';

function App() {

  const [show, setShow] = useState(true);

  // setTimeout(() => {
  //   setShow(false);
  // }, 10000);

  return (
    <div>

      { show && <StudentManagement></StudentManagement> }
      {/* <GuessTheNumber></GuessTheNumber> */}
      {/* <h1>Todo List</h1> */}
      {/* <ToDoList title="Yours to-do list"></ToDoList> */}
      {/* <StateDemo></StateDemo> */}
    </div>
  );
}

export default App;
