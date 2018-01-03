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
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  return {
    submitForm: user => dispatch(processForm(user)),
    clearErrors: () => dispatch(receiveCurrentUser(null)),
    formType
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(SessionForm);
