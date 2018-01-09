import * as CommentAPIUtil from '../util/comment_api_util';

export const createComment = (comment) => dispatch => {
  return CommentAPIUtil.createComment(comment.body, comment.projectId);
};
