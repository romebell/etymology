import React from 'react'
import ReactDOM from 'react-dom';
import configureStore from './store/store';
// import Root from './
import {login, signup, logout} from './utils/session_api_util';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  
  ReactDOM.render(<h1>Welcome to Etymology</h1>, root);
})

// TESTING 
// window.login = login;
// window.signup = signup;
// window.logout = logout;
let store = configureStore();
window.getState = store.getState;
window.dispatch = store.dispatch;