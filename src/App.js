import './App.css';
import React from 'react';
import HospitalManagement from './components/HospitalManagement/HospitalManagement';
import GuessTheNumber from './components/NumberGame/NumberGuess';
import TicTacToe from './components/TicTacToe/TicTacToe';
import store from './redux/store';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';



function App() {
  return (
  	<div>
    <Router>
    <Provider store={store}>
    
   {/*<h1>Hello</h1>*/}
   {/*<h1>Todo List 1</h1>
    <ToDoList title="Yours to-do list"></ToDoList>*/}
      
   {/*<HospitalManagement></HospitalManagement>*/}

	   {/*<div className="container"> 
		   <h3 style={{color:"red"}}>Number Game</h3>
		      <GuessTheNumber></GuessTheNumber>
	   </div>*/}
     <div>
       <ul>
         <li>
           <Link to="/hospital">Hospital Management</Link>
         </li>

         <li>
           <Link to="/tictactoe">TicTacToe</Link>
         </li>

         <li>
           <Link to="/number-game">Number Game</Link>
         </li>
       </ul>
         <Switch>
           <Route exact path="/">
             <h2>Generic Path</h2>
           </Route>

            <Route path="/hospital">
             <HospitalManagement/>
           </Route>

            <Route exact path="/tictactoe">
             <TicTacToe/>
           </Route>

            <Route exact path="/number-game">
             <GuessTheNumber/>
           </Route>
         </Switch>
     </div>
     {/*<TicTacToe></TicTacToe>*/}
    </Provider>
    </Router>
   </div>
   
  );
}

export default App;
