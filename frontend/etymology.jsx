import React from 'react'
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// TESTING
import * as APIUtil from './utils/playlist_api_utils';
import * as PlaylistActions from './actions/playlist_actions';
import { postSession } from './utils/session_api_util';

window.login = postSession;

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();

  // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // TESTING END

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
})
