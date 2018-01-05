import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as StepAPIUtil from './util/step_api_util';


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

  window.fetchSteps = StepAPIUtil.fetchSteps;
  window.createStep = StepAPIUtil.createStep;

  ReactDOM.render(<Root store={store}/>, root);
});
