import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { logout } from './actions/session_actions';
import * as ProjectAPIUtil from './util/project_api/util';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  let store;

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.fetchProjects = ProjectAPIUtil.fetchProjects;
  window.fetchProject = ProjectAPIUtil.fetchProject;
  window.fetchProject = ProjectAPIUtil.fetchProject;

  window.logout = logout;
  window.dispatch = store.dispatch;
  window.getState = store.getState;

  ReactDOM.render(<Root store={store}/>, root);
});
