export const createFavorite = (projectId) => {
  return (
    $.ajax({
      method: 'post',
      url: `api/favorites`,
      data: { projectId }
    })
  )
}

export const deleteFavorite = (projectId) => {
  return (
    $.ajax({
      method: 'delete',
      url: `api/favorites/${projectId}`
    })
  )
}
