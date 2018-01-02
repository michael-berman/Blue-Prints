import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import * as SessionAPIUtil from './util/session_api_util';
import Root from './components/root';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = configureStore();

  // Testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = SessionAPIUtil.login;
  window.logout = SessionAPIUtil.logout;
  window.signup = SessionAPIUtil.signup;
  // end of testing

  ReactDOM.render(<Root store={store}/>, root);
});
