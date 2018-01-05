import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import { fetchSteps, createStep } from './actions/step_actions';

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


  ReactDOM.render(<Root store={store}/>, root);
});

// window.fetchSteps = fetchSteps;
// window.createStep = createStep;
// window.dispatch = store.dispatch;
