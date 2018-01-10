import merge from 'lodash/merge';

import { RECEIVE_USER } from '../actions/user_actions';

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_USER:
      let newUser = { [action.user.id]: action.user };
      newState = merge({}, state, newUser);
      return newState;
    default:
      return state;
  }
}

export default UsersReducer;
