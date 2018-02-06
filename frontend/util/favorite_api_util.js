export const createFavorite = (projectId) => {
  return (
    $.ajax({
      method: 'post',
      url: `api/favorites`,
      data: { projectId }
    })
  )
}

export const createFavorite = (projectId) => {
  return (
    $.ajax({
      method: 'delete',
      url: `api/favorites/${projectId}`
    })
  )
}
