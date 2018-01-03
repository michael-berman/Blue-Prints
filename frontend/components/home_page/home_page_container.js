import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import HomePage from './home_page';
import { fetchProjects } from '../../actions/project_actions';

const mapStatetoProps = state => {
  return {
    projects: Object.values(state.entities.projects)
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchProjects: () => dispatch(fetchProjects())
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(HomePage);
