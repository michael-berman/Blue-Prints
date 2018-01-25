import merge from 'lodash/merge';

import { RECEIVE_PROJECT, RECEIVE_PROJECTS }
          from '../actions/project_actions';

const CommentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_PROJECT:
      let newComments = action.project.comments;
      newState = merge({}, state, newComments);
      return newState;
    case RECEIVE_PROJECTS:
      return {};
    default:
      return state;
  }
}

export default CommentsReducer;
