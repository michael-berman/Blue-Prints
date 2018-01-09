export const createComment = comment => {
  return (
    $.ajax({
      method: 'post',
      url: 'api/projects/:project_id/comments',
      data: { comment }
    })
  )
}
