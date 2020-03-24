import React from 'react';
import Login from './components/Login'
import FriendsList from './components/FriendsList'
import { Link, Route, Switch } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'

import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>login</Link>
        <Link to='/friends'>friends</Link>
      </nav>
      <Switch>
        <Route exact path='/' component={Login} />
        <PrivateRoute path='/friends' component={FriendsList} />
      </Switch>
    </div>
  );
}

export default App;
