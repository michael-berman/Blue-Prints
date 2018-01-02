import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import * as SessionAPIUtil from './util/session_api_util';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = configureStore();

  
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = SessionAPIUtil.login;
  window.logout = SessionAPIUtil.logout;
  window.signup = SessionAPIUtil.signup;

  ReactDOM.render(<h1>Welcome to Blue Prints</h1>, root);
});
