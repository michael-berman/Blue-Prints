import { connect } from 'react-redux';

import ProjectShow from './project_show';
import  { fetchProject } from '../../actions/project_actions';
import { createComment, fetchComments }
        from '../../actions/comment_actions';
import { fetchUser } from '../../actions/user_actions';

const mapStatetoProps = (state, ownProps) => {
  return {
    project: state.entities.projects[ownProps.match.params.projectId],
    currentUser: state.session.currentUser,
    comments: state.entities.comments,
    steps: state.entities.steps
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    fetchProject: (projectId) => dispatch(fetchProject(projectId)),
    createComment: (comment) =>  dispatch(createComment(comment)),
    fetchComments: (projectId) => dispatch(fetchComments(projectId))
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(ProjectShow);
