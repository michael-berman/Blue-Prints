import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { searchProject } from '../../actions/project_actions';
import NavBar from './navbar';
import { fetchUser } from '../../actions/user_actions';

const mapStatetoProps = (state) => {
  return {
    currentUser: state.session.currentUser
  }
};

const mapDispatchtoProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    searchProject: query => dispatch(searchProject(query)),
    fetchUser: userId => dispatch(fetchUser(userId))
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(NavBar);
