import './App.css';
import React, { useState } from 'react';
// import ToDoList from './components/ToDoList';
// import StateDemo from './components/StateDemo';
import GuessTheNumber from './components/game/GueesTheNumber';
import StudentManagement from './components/StudentManagement/StudentManagement';
// import StudentManagementRedux from './components/StudentManagementRedux/StudentManagementRedux';
// import StudentCount from './components/StudentManagementRedux/StudentCount';

import TicTacToe from './components/TicTacToe/TicTacToe';
import Login from './components/Login/Login';
import LoginSuccess from './components/Login/LoginSucess';


import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router,
   Link, Switch, Route } from 'react-router-dom';

function App() {

  // const [show, setShow] = useState(true);

  return (
    <div>
      <Router>
      <Provider store={store}>
        <div>
          <ul>
            <li>
              <Link to="/student/100">Student Management</Link>
            </li>
            <li>
              <Link to="/tic-tac-toe">Tic Tac Toe</Link>
            </li>
            <li>
              <Link to="/number-game">Number game</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/">
              <h1>Genertic path</h1>
            </Route>
            <Route exact path="/stu">
              <h1>Stu path</h1>
            </Route>
            <Route path="/student/:id">
              <StudentManagement />
            </Route>
            <Route path="/tic-tac-toe">
              <TicTacToe />
            </Route>
            <Route path="/number-game">
              <GuessTheNumber />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/login-success">
              <LoginSuccess />
            </Route>
          </Switch>
        </div>
      </Provider>
      </Router>
      {/* { <StudentCount></StudentCount>} */}
    </div>
  );
}

export default App;
