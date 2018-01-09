export const createComment = (comment, projectId) => {
  return (
    $.ajax({
      method: 'post',
      url: `api/projects/${projectId}/comments`,
      data: { comment: { body: comment } }
    })
  )
}
