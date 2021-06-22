import './App.css';
import React, { useState } from 'react';
// import ToDoList from './components/ToDoList';
// import StateDemo from './components/StateDemo';
// import GuessTheNumber from './components/game/GueesTheNumber';
import StudentManagement from './components/StudentManagement/StudentManagement';
import StudentManagementRedux from './components/StudentManagementRedux/StudentManagementRedux';
import StudentCount from './components/StudentManagementRedux/StudentCount';

import TicTacToe from './components/TicTacToe/TicTacToe';

import store from './redux/store';
import { Provider } from 'react-redux';


function App() {

  const [show, setShow] = useState(true);

  // setTimeout(() => {
  //   setShow(false);
  // }, 10000);

  return (
    <div>
      <Provider store={store}>
        <div>
          {/* { show && <StudentManagement></StudentManagement> } */}
          {/* { show && <StudentManagementRedux></StudentManagementRedux>} */}
          {/* <GuessTheNumber></GuessTheNumber> */}
          {/* <h1>Todo List</h1> */}
          {/* <ToDoList title="Yours to-do list"></ToDoList> */}
          {/* <StateDemo></StateDemo> */}
          <TicTacToe></TicTacToe>
        </div>
      </Provider>
      {/* { <StudentCount></StudentCount>} */}
    </div>
  );
}

export default App;
