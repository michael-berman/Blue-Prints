export const createFavorite = (project_id) => {
  return (
    $.ajax({
      method: 'post',
      url: `api/favorites`,
      data: { project_id }
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
