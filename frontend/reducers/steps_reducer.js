import merge from 'lodash/merge';

import {
  RECEIVE_STEPS, RECEIVE_STEP
} from '../actions/step_actions';

const StepsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_STEPS:
      newState = merge({}, action.steps)
      return newState;
    case RECEIVE_STEP:
      let newStep = { [action.step.id]: action.step }
      newState = merge({}, state, newStep);
      return newState
    default:
      return state;
  }
}

export default StepsReducer;
