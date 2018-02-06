import merge from 'lodash/merge';

import { RECEIVE_PROJECT } from '../actions/project_actions';
import { RECEIVE_FAVORITE, REMOVE_FAVORITE } from
          '../actions/favorite_actions';

const FavoritesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  let favorite;
  switch (action.type) {
    case RECEIVE_PROJECT:
      favorite = {favorite: action.project.favorite, length: action.project.favoriteLength };
      newState = merge({}, state, favorite);
      return newState;
    case RECEIVE_FAVORITE:
      favorite = {favorite: action.favorite.favorite, length: action.favorite.favoriteLength };
      newState = merge({}, state, favorite);
      return newState;
    case REMOVE_FAVORITE:
      favorite = {favorite: null, length: action.favorite.favoriteLength };
      newState = merge({}, state, favorite);
      return newState;
    default:
      return {};
  }
}

export default FavoritesReducer;
