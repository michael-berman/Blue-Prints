import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveSessionErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors: errors.responseJSON
  };
}

export const clearSessionErrors = () => {
  return {
    type: CLEAR_SESSION_ERRORS
  };
}

export const signup = user => dispatch => {
  return SessionAPIUtil.signup(user).then(user => {
    return dispatch(receiveCurrentUser(user));
  }, err => (dispatch(receiveSessionErrors(err))
  ));
};

export const login = user => dispatch => {

  return SessionAPIUtil.login(user).then(user => {
    return dispatch(receiveCurrentUser(user));
  }, err => (dispatch(receiveSessionErrors(err))
  ));
};

export const logout = () => dispatch => {
  return SessionAPIUtil.logout().then(user => {
    return dispatch(receiveCurrentUser(null))
  });
};
