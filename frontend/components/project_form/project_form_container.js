import { connect } from 'react-redux';

import ProjectForm from './project_form';

import { createProject,
          fetchProject,
          updateProject } from '../../actions/project_actions';

const mapStatetoProps = (state, ownProps) => {
  if (ownProps.match.path === "/projects/:projectId/edit"){
    return {
      currentUser: state.session.currentUser,
      project: state.entities.projects[ownProps.match.params.projectId]
    }
  } else {
    return {
      currentUser: state.session.currentUser,
    };
  }
};

const mapDispatchtoProps = (dispatch, ownProps) => {
  if (ownProps.match.path === "/project/:projectId/edit"){
    return {
      createProject: (project) => dispatch(createProject(project)),
    }
  }
  return {
    updateProject: (project) => dispatch(createProject(project)),
    fetchProject: (projectId) => dispatch(fetchProject(projectId))
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(ProjectForm);
