import { connect } from 'react-redux';

import ProjectShow from './project_show';
import  { fetchProject } from '../../actions/project_actions';
import { createComment } from '../../actions/comment_actions';

const mapStatetoProps = (state, ownProps) => {
  return {
    project: state.entities.projects[ownProps.match.params.projectId]
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    fetchProject: (projectId) => dispatch(fetchProject(projectId)),
    createComment: (comment) =>  dispatch(createComment(comment))
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(ProjectShow);
