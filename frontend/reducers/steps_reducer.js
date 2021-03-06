import merge from 'lodash/merge';

import { RECEIVE_PROJECT } from '../actions/project_actions';

const CommentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_PROJECT:
      let newSteps = action.project.steps;
      newState = merge({}, newSteps);
      return newState;
    default:
      return state;
  }
}

export default CommentsReducer;
