import { connect } from 'react-redux';

import ProjectForm from './project_form';

import { createProject } from '../../actions/project_actions';

const mapStatetoProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchtoProps = (dispatch, ownProps) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(ProjectForm);
