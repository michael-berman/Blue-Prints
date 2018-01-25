import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';

export const receiveComments = comments => {
  return {
    type: RECEIVE_COMMENTS,
    comments
  }
}

export const createComment = (comment) => dispatch => {
  return CommentAPIUtil.createComment(comment.body, comment.projectId);
};

export const deleteComment = (commentId) => dispatch => {
  return CommentAPIUtil.deleteComment(commentId);
}

export const fetchComments = (projectId) => dispatch => {
  return CommentAPIUtil.fetchComments(projectId).then( comments => {
    return dispatch(receiveComments(comments))
  })
}
