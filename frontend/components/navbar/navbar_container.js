import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { searchProject } from '../../actions/project_actions';
import NavBar from './navbar';

const mapStatetoProps = ({ session }) => {
  return {
    currentUser: session.currentUser
  }
};

const mapDispatchtoProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    searchProject: query => dispatch(searchProject(query))
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(NavBar);
