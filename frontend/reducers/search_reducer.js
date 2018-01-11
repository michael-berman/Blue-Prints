import merge from 'lodash/merge';

import { RECEIVE_PROJECTS } from '../actions/project_actions';

const SearchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PROJECTS:
    if (action.projects.query) {
      return merge({}, state, action.projects.query);
    } else {
      return state;
    }
    default:
      return state;
  }
}

export default SearchReducer;
