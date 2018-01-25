import merge from 'lodash/merge';

import { RECEIVE_PROJECT, RECEIVE_PROJECTS }
          from '../actions/project_actions';
import { RECEIVE_COMMENTS } from '../actions/comment_actions';

const CommentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return merge({}, state, action.comments.comments);
    case RECEIVE_PROJECT:
      let newComments = action.project.comments;
      newState = merge({}, state, newComments);
      return newState;
    default:
      return {};
  }
}

export default CommentsReducer;
