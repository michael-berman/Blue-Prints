import * as FavoriteAPIUtil from '../util/favorite_api_util';

// export const RECEIVE_FAVORITE = 'RECEIVE_FAVORITE';
// export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';


export const createFavorite = projectId => {
  return FavoriteAPIUtil.createFavorite(projectId);
}

export const deleteFavorite = projectId => {
  return FavoriteAPIUtil.deleteFavorite(projectId);
}
