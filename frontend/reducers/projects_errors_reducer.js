import {RECEIVE_PROJECTS,
  RECEIVE_PROJECT,
  REMOVE_PROJECT,
  RECEIVE_PROJECT_ERRORS} from '../actions/project_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PROJECT_ERRORS:
      return action.errors;
    case RECEIVE_PROJECTS:
      return [];
    case RECEIVE_PROJECT:
      return [];
    case REMOVE_PROJECT:
      return [];
    default:
      return state;
  }
}
