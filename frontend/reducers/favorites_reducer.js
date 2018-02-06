import mergeimport merge from 'lodash/merge';

import { RECEIVE_PROJECT } from '../actions/project_actions';

const FavoritesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_PROJECT:
      let favorites = action.project.favorites;
      newState = merge({}, state, newComments);
      return newState;
    default:
      return {};
  }
}

export default FavoritesReducer;
