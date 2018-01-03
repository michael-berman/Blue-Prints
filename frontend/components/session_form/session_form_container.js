import { connect } from 'react-redux';

import { login, logout, signup, receiveCurrentUser } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStatetoProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
  };
};

const mapDispatchtoProps = (dispatch, { location }) => {
  const locationString = location.pathname.slice(1);
  const formType = locationString.charAt(0).toUpperCase() + locationString.slice(1);
  const processForm = (formType === 'Login') ? login : signup;
  return {
    submitForm: user => dispatch(processForm(user)),
    clearErrors: () => dispatch(receiveCurrentUser(null)),
    formType
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(SessionForm);
