import React from 'react'
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import {login, signup, logout} from './utils/session_api_util';
import { postUser } from './utils/session_api_util';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();

  // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // Testing END

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
})


// TESTING
// window.login = login;
// window.postUser = postUser;
// window.logout = logout;