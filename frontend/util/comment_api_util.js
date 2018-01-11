export const createComment = (comment, projectId) => {
  return (
    $.ajax({
      method: 'post',
      url: `api/projects/${projectId}/comments`,
      data: { comment: { body: comment } }
    })
  )
}

export const deleteComment = (commentId) => {
  return (
    $.ajax({
      method: 'delete',
      url: `api/comments/${commentId}`
    })
  )
}
