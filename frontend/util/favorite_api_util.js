export const createFavorite = (project_id) => {
  return (
    $.ajax({
      method: 'post',
      url: `api/favorites`,
      data: { project_id }
    })
  )
}

export const deleteFavorite = (favoriteId) => {
  return (
    $.ajax({
      method: 'delete',
      url: `api/favorites/${favoriteId}`
    })
  )
}
