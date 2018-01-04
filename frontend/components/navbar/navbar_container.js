import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import NavBar from './navbar';

const mapStatetoProps = ({ session }) => {
  return {
    currentUser: session.currentUser
  }
};

const mapDispatchtoProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(NavBar);
