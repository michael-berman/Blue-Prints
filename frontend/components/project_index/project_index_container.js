import { connect } from 'react-redux';
import ProjectIndex from './project_index';
import { fetchProjects } from '../../actions/project_actions';

const mapStatetoProps = (state) => {
  return {
    projects: state.entities.projects
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    fetchProjects: () => dispatch(fetchProjects())
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(ProjectIndex);
