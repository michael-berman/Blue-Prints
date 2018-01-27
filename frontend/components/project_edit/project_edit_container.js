import { connect } from 'react-redux';

import ProjectEditForm from './project_edit_form';

import { fetchProject, updateProject } from '../../actions/project_actions';

const mapStatetoProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchtoProps = (dispatch, ownProps) => {
  return {
    fetchProject: (projectId) => dispatch(fetchProject(projectId))
    updateProject: (project) => dispatch(createProject(project))
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(ProjectForm);
