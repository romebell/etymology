import React from 'react';
import SignupContainer from './session/signup_container';
import Home from './home/home';
import { Route } from 'react-router-dom';
import LoginContainer from './session/login_container';
const App = () => (
  <div>
    <Route exact path='/' component={Home} />
    <Route path='/signup' component={SignupContainer} />
    <Route path="/login" component={LoginContainer} />
  </div>
);

export default App;

