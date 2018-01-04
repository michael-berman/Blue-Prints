import { connect } from 'react-redux';

import ProjectShow from './project_show';
import  { fetchProject } from '../../actions/project_actions';

const mapStatetoProps = (state, ownProps) => {
  return {
    project: state.entities.projects[ownProps.match.params.projectId]
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    fetchProject: (projectId) => dispatch(fetchProject(projectId))
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(ProjectShow);
