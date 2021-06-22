import './App.css';
import React from 'react';
import HospitalManagement from './components/HospitalManagement/HospitalManagement';
import GuessTheNumber from './components/NumberGame/NumberGuess';
import TicTacToe from './components/TicTacToe/TicTacToe';
import store from './redux/store';
import { Provider } from 'react-redux';
function App() {
  return (
  	<div>
     <Provider store={store}>
   
   {/*<h1>Hello</h1>*/}
   {/*<h1>Todo List 1</h1>
    <ToDoList title="Yours to-do list"></ToDoList>*/}
      
   {/*<HospitalManagement></HospitalManagement>
	   <div className="container"> 
		   <h3 style={{color:"red"}}>Number Game</h3>
		      <GuessTheNumber></GuessTheNumber>
	   </div>*/}
      <TicTacToe></TicTacToe>
      </Provider>
   </div>
   
  );
}

export default App;
