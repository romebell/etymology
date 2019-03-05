import React from 'react';
import SignupContainer from './session/signup_container';
import Home from './home/home';
import Playlists from './playlists/playlists';
import LoginContainer from './session/login_container';
// import NavBarContainer from './navbar/nav_bar_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route.util';

const App = () => (
  <div>
    {/* <Route path="/" component={NavBarContainer} /> */}
    <Route exact path='/' component={Home} />
    <Route path='/playlists' component={Playlists} />
    <Route path='/signup' component={SignupContainer} />
    <Route path="/login" component={LoginContainer} />
  </div>
);

export default App;

