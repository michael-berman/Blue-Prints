import { connect } from 'react-redux';

import ProjectShow from './project_show';
import  { fetchProject } from '../../actions/project_actions';
import { createComment, fetchComments }
        from '../../actions/comment_actions';
import { fetchUser } from '../../actions/user_actions';
import { createFavorite, deleteFavorite } from '../../actions/favorite_actions';

const mapStatetoProps = (state, ownProps) => {
  return {
    project: state.entities.projects[ownProps.match.params.projectId],
    currentUser: state.session.currentUser,
    comments: state.entities.comments,
    steps: state.entities.steps,
    favorites: state.entities.favorites
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    fetchProject: (projectId) => dispatch(fetchProject(projectId)),
    createComment: (comment) =>  dispatch(createComment(comment)),
    fetchComments: (projectId) => dispatch(fetchComments(projectId)),
    createFavorite: (projectId) => dispatch(createFavorite(projectId)),
    deleteFavorite: (projectId) => dispatch(deleteFavorite(projectId))
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(ProjectShow);
