import * as StepAPIUtil from '../util/step_api_util';

export const RECEIVE_STEPS = 'RECEIVE_STEPS';
export const RECEIVE_STEP = 'RECEIVE_STEP';

export const receiveSteps = steps => {
  return {
    type: RECEIVE_STEPS,
    steps
  };
};

export const receiveStep = step => {
  return {
    type: RECEIVE_STEP,
    step
  };
};

export const fetchSteps = () => dispatch => {
  StepAPIUtil.fetchSteps().then( steps => {
    return dispatch(receiveSteps(steps))
  });
};

export const createStep = (step) => dispatch => {
  StepAPIUtil.createStep(step)
};
