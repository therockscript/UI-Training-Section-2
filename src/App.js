import './App.css';
import React from 'react';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
        <ToDoList title="Yours to-do list"></ToDoList>
      </header>
    </div>
  );
}

export default App;
