import * as FavoriteAPIUtil from '../util/favorite_api_util';

export const RECEIVE_FAVORITE = 'RECEIVE_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export const receiveFavorite = favorite => {
  return {
    type: RECEIVE_FAVORITE,
    favorite
  }
}

export const removeFavorite = () => {
  return {
    type: REMOVE_FAVORITE
  }
}

export const createFavorite = projectId = dispatch => {
  return FavoriteAPIUtil.createFavorite(projectId).then( (favorite) => {
    return dispatch(receiveFavorite(favorite))
  })
}

export const deleteFavorite = projectId = dispatch => {
  return FavoriteAPIUtil.deleteFavorite(projectId).then( () => {
    return dispatch(removeFavorite());
  })
}
