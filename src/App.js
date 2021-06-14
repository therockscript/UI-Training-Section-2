import './App.css';
import React from 'react';
import ToDoList from './components/ToDoList';
import StateDemo from './components/StateDemo';
import GuessTheNumber from './components/game/GueesTheNumber';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GuessTheNumber></GuessTheNumber>
        {/* <h1>Todo List</h1> */}
        {/* <ToDoList title="Yours to-do list"></ToDoList> */}
        {/* <StateDemo></StateDemo> */}
      </header>
    </div>
  );
}

export default App;
