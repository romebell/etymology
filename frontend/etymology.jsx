import React from 'react'
import ReactDOM from 'react-dom';
// import { configureStore } from './store/store.js'
// import Root from './
import {login, signup, logout} from './utils/session_api_util'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  // let store = configureStore();
  ReactDOM.render(<h1>Welcome to Etymology</h1>, root);
})

// TESTING 
// window.login = login;
// window.signup = signup;
// window.logout = logout;