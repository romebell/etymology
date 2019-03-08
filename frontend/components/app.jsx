import React from 'react';
import SignupContainer from './session/signup_container';
import Home from './home/home';
import PlaylistsContainer from './playlists/playlists_container';
import LoginContainer from './session/login_container';
import SongsContainer from './songs/songs_container';
// import NavBarContainer from './navbar/nav_bar_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route.util';

const App = () => (
  <div>
    {/* <Route path="/" component={NavBarContainer} /> */}
    <Route path="/songs" component={SongsContainer} />
    <Route exact path='/' component={Home} />
    <Route path='/playlists' component={PlaylistsContainer} />
    <Route path='/signup' component={SignupContainer} />
    <Route path="/login" component={LoginContainer} />
  </div>
);

export default App;

