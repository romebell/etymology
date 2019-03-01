import React from 'react';
import SignupContainer from './session/signup_container';
import Home from './home/home';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Route exact path='/' component={Home} />
    <Route path='/signup' component={SignupContainer} />
  </div>
);

export default App;

