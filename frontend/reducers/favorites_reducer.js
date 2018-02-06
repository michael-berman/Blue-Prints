import merge from 'lodash/merge';

import { RECEIVE_PROJECT } from '../actions/project_actions';

const FavoritesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_PROJECT:
      let favorite = {favorite: action.project.favorite, length: action.project.favoriteLength };
      newState = merge({}, state, favorite);
      return newState;
    default:
      return {};
  }
}

export default FavoritesReducer;
